document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('uploadForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Field Values
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const imageInput = document.getElementById('productImage');
    const specifications = document.getElementById('specifications').value;

    if (!imageInput.files || imageInput.files.length === 0) {
      alert('Please select an image file!');
      return;
    }

    const fileName = imageInput.files[0].name;

    // Success Action Example
    alert(`Success! Product Published:\n\nName: ${productName}\nCategory: ${category}\nPrice: ${price}\nImage File: ${fileName}`);
    
    // Reset Form after Submission
    form.reset();
  });
});
