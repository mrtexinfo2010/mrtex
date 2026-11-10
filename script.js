document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  const quoteButtons = document.querySelectorAll('.quote-btn');

  // Touch device animation handler (Mobile & Tablet)
  cards.forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.add('touch-active');
    });

    card.addEventListener('touchend', () => {
      setTimeout(() => {
        card.classList.remove('touch-active');
      }, 300);
    });
  });

  // Quote Button Interaction
  quoteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents triggering parent card events
      const productName = button.getAttribute('data-product');
      
      alert(`M.R.TEX Inquiry:\n\nThank you for choosing "${productName}".\nPlease contact M.R.TEX sales & technical support team for detailed price quotes and availability.`);
    });
  });
});
