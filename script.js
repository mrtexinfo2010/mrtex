// Default Products Data
const defaultProducts = [
  {
    name: "High Speed Single Jersey Machine",
    category: "Machinery",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    description: "Premium circular knitting machine engineered for smooth fabric production.",
    specs: "Gauge: 24G - 34G, Speed: 35 RPM, Diameter: 30-34 inch"
  },
  {
    name: "Industrial Timing Belts",
    category: "Spare Component",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    description: "Heavy-duty drive belts constructed for zero slip operation.",
    specs: "Material: Polyurethane, Pitch: T5 / T10 / AT10"
  }
];

// Load from LocalStorage or use default
let products = JSON.parse(localStorage.getItem('mrtex_products')) || defaultProducts;

// DOM Elements
const productGrid = document.getElementById('productGrid');
const adminModal = document.getElementById('adminModal');
const openAdminBtn = document.getElementById('openAdminBtn');
const closeAdminBtn = document.getElementById('closeAdminBtn');
const loginBtn = document.getElementById('loginBtn');
const adminPasswordInput = document.getElementById('adminPasswordInput');
const loginError = document.getElementById('loginError');
const loginScreen = document.getElementById('loginScreen');
const dashboardScreen = document.getElementById('dashboardScreen');
const productForm = document.getElementById('productForm');
const adminProductList = document.getElementById('adminProductList');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const formImageFile = document.getElementById('formImageFile');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
const imagePreview = document.getElementById('imagePreview');

let currentBase64Image = "";

// 1. Render Catalog Cards
function renderCatalog() {
  productGrid.innerHTML = '';
  products.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <div style="overflow:hidden;">
        <img src="${item.image}" alt="${item.name}" class="card-img">
      </div>
      <div class="card-body">
        <span class="badge">${item.category}</span>
        <h3>${item.name}</h3>
        <p style="font-size:0.9rem; color:#64748b; margin-bottom:8px;">${item.description}</p>
        <div class="specs-box">
          <strong>Specs:</strong> ${item.specs}
        </div>
      </div>
    `;
    
    // Mobile Touch animation listeners
    card.addEventListener('touchstart', () => card.classList.add('touch-active'));
    card.addEventListener('touchend', () => setTimeout(() => card.classList.remove('touch-active'), 300));
    
    productGrid.appendChild(card);
  });
}

// 2. Render Admin Panel Items
function renderAdminList() {
  adminProductList.innerHTML = '';
  products.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'admin-item';
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong> (${item.category})
      </div>
      <div class="admin-item-btns">
        <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
      </div>
    `;
    adminProductList.appendChild(div);
  });
}

// Save to LocalStorage
function saveLocal() {
  localStorage.setItem('mrtex_products', JSON.stringify(products));
  renderCatalog();
  renderAdminList();
}

// Image File Selection & Preview Handler
formImageFile.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      currentBase64Image = evt.target.result;
      imagePreview.src = currentBase64Image;
      imagePreviewContainer.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
});

// 3. Password Verification (mrtex2025)
loginBtn.addEventListener('click', () => {
  const enteredPassword = adminPasswordInput.value;
  if (enteredPassword === 'mrtex2025') {
    loginScreen.classList.add('hidden');
    dashboardScreen.classList.remove('hidden');
    loginError.innerText = '';
    renderAdminList();
  } else {
    loginError.innerText = 'Incorrect password! Access denied.';
  }
});

// Admin Modal Toggle
openAdminBtn.addEventListener('click', () => adminModal.classList.add('active'));
closeAdminBtn.addEventListener('click', () => adminModal.classList.remove('active'));

// 4. Add / Update Product
productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const index = parseInt(document.getElementById('editIndex').value);

  if (!currentBase64Image && index === -1) {
    alert("Please select a product photo from your device!");
    return;
  }
  
  const newProduct = {
    name: document.getElementById('formName').value,
    category: document.getElementById('formCategory').value,
    image: currentBase64Image || (index !== -1 ? products[index].image : ""),
    description: document.getElementById('formDescription').value,
    specs: document.getElementById('formSpecs').value
  };

  if (index === -1) {
    products.push(newProduct);
  } else {
    products[index] = newProduct;
  }

  saveLocal();
  resetForm();
});

// Edit Action
window.editProduct = function(index) {
  const item = products[index];
  document.getElementById('editIndex').value = index;
  document.getElementById('formName').value = item.name;
  document.getElementById('formCategory').value = item.category;
  document.getElementById('formDescription').value = item.description;
  document.getElementById('formSpecs').value = item.specs;

  // Set existing image preview
  currentBase64Image = item.image;
  imagePreview.src = item.image;
  imagePreviewContainer.classList.remove('hidden');

  document.getElementById('saveProductBtn').innerText = "Update Product";
  cancelEditBtn.classList.remove('hidden');
};

// Delete Action
window.deleteProduct = function(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    saveLocal();
  }
};

// Cancel Edit
cancelEditBtn.addEventListener('click', resetForm);

function resetForm() {
  document.getElementById('editIndex').value = "-1";
  productForm.reset();
  currentBase64Image = "";
  imagePreview.src = "";
  imagePreviewContainer.classList.add('hidden');
  document.getElementById('saveProductBtn').innerText = "Save / Update Product";
  cancelEditBtn.classList.add('hidden');
}

// Initial Run
renderCatalog();
