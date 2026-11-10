const defaultProducts = [
  {
    id: 1,
    name: "Single Jersey Circular Knitting Machine",
    category: "single-jersey",
    price: "Inquire for Pricing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    desc: "High speed 30 inch / 24G single jersey machine for cotton, polyester, and elastane knitted fabric production."
  },
  {
    id: 2,
    name: "Double Jersey Interlock Machinery",
    category: "double-jersey",
    price: "Inquire for Specs",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    desc: "Precision double jersey machine for rib and interlock structure knitting with low energy consumption."
  },
  {
    id: 3,
    name: "Groz-Beckert Needles & Sinkers Set",
    category: "spare-parts",
    price: "In Stock / Wholesale",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    desc: "Original imported needles and sinkers for double and single jersey circular knitting machinery."
  },
  {
    id: 4,
    name: "Memminger Type Positive Feeder",
    category: "spare-parts",
    price: "Inquire Price",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    desc: "Smooth yarn tension feeder designed to reduce yarn breakages during continuous factory operations."
  }
];

function fetchProducts() {
  const data = localStorage.getItem('mrtex_items');
  return data ? JSON.parse(data) : defaultProducts;
}

function saveProducts(items) {
  localStorage.setItem('mrtex_items', JSON.stringify(items));
}

function displayProducts(filter = 'all') {
  const container = document.getElementById('productGrid');
  const items = fetchProducts();
  container.innerHTML = '';

  const filtered = filter === 'all' ? items : items.filter(i => i.category === filter);

  if (!filtered.length) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">No machines found in this section.</p>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="product-img" onerror="this.src='https://via.placeholder.com/400x250?text=M.R.+TEX'">
      <div class="product-body">
        <span class="product-cat">${item.category.replace('-', ' ')}</span>
        <h3 class="product-title">${item.name}</h3>
        <p class="product-price">${item.price}</p>
        <div class="card-actions">
          <button class="btn btn-primary" onclick="showModal(${item.id})">Details</button>
          <a href="https://wa.me/8801911677701?text=Hi%20M.R.%20TEX,%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}" class="btn btn-wa" target="_blank">
            <i class="fab fa-whatsapp"></i> Buy
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    displayProducts(e.target.dataset.category);
  });
});

// File Upload Logic using FileReader
document.getElementById('productForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fileInput = document.getElementById('pImageFile');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select an image file!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const imageDataUrl = event.target.result;

    const newItem = {
      id: Date.now(),
      name: document.getElementById('pName').value,
      category: document.getElementById('pCategory').value,
      price: document.getElementById('pPrice').value,
      image: imageDataUrl,
      desc: document.getElementById('pDesc').value
    };

    const list = fetchProducts();
    list.unshift(newItem);
    saveProducts(list);
    displayProducts();
    e.target.reset();
    alert('Product image and details uploaded successfully!');
  };

  reader.readAsDataURL(file);
});

function showModal(id) {
  const item = fetchProducts().find(p => p.id === id);
  if (!item) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <h2 style="color: #0b2545; margin-bottom: 10px;">${item.name}</h2>
    <img src="${item.image}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 4px; margin-bottom: 15px;" onerror="this.src='https://via.placeholder.com/400x250?text=M.R.+TEX'">
    <p><strong>Category:</strong> ${item.category.toUpperCase()}</p>
    <p><strong>Pricing:</strong> ${item.price}</p>
    <p style="margin-top: 10px;"><strong>Specifications:</strong><br>${item.desc}</p>
    <div style="margin-top: 20px;">
      <a href="https://wa.me/8801911677701?text=Hi%20M.R.%20TEX,%20I%20need%20details%20for%20${encodeURIComponent(item.name)}" class="btn btn-wa" target="_blank">
        <i class="fab fa-whatsapp"></i> Direct WhatsApp Inquiry
      </a>
    </div>
  `;
  document.getElementById('itemModal').style.display = 'flex';
}

document.querySelector('.modal-close').onclick = () => {
  document.getElementById('itemModal').style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === document.getElementById('itemModal')) {
    document.getElementById('itemModal').style.display = 'none';
  }
};

document.getElementById('inquiryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting M.R. TEX! We will respond shortly.');
  e.target.reset();
});

displayProducts();
