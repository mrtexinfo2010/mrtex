:root {
  --navy: #0b2545;
  --blue: #134074;
  --accent: #0077b6;
  --light-bg: #f4f7fb;
  --white: #ffffff;
  --text-dark: #1d2d44;
  --text-gray: #5c677d;
  --border: #e2e8f0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--light-bg);
  color: var(--text-dark);
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Top Bar */
.top-bar {
  background: var(--navy);
  color: var(--white);
  padding: 8px 0;
  font-size: 0.85rem;
}

.top-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.contact-meta span {
  margin-right: 10px;
}

.divider {
  opacity: 0.4;
}

/* Header */
header {
  background: var(--white);
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.logo-main {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--navy);
}

.logo-main .accent {
  color: var(--accent);
}

.sub-title {
  display: block;
  font-size: 0.72rem;
  color: var(--text-gray);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links a:hover, .nav-links a.active {
  color: var(--accent);
}

/* Buttons */
.btn {
  padding: 9px 18px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
}

.btn-primary {
  background: var(--accent);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--blue);
}

.btn-outline {
  border: 2px solid var(--white);
  color: var(--white);
}

.btn-outline:hover {
  background: var(--white);
  color: var(--navy);
}

.btn-wa {
  background: #25d366;
  color: var(--white);
}

.btn-wa:hover {
  background: #1eb857;
}

.btn-full {
  width: 100%;
  justify-content: center;
}

/* Hero */
.hero {
  background: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
  height: 480px;
}

.hero-overlay {
  background: rgba(11, 37, 69, 0.88);
  height: 100%;
  display: flex;
  align-items: center;
}

.hero-container {
  color: var(--white);
  max-width: 750px;
}

.badge {
  background: rgba(255,255,255,0.15);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-container h1 {
  font-size: 2.4rem;
  margin: 15px 0;
  line-height: 1.2;
}

.hero-container p {
  font-size: 1.05rem;
  opacity: 0.9;
  margin-bottom: 25px;
}

.hero-actions {
  display: flex;
  gap: 15px;
}

/* Sections */
.section {
  padding: 65px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2rem;
  color: var(--navy);
}

.section-header p {
  color: var(--text-gray);
}

/* Filters */
.category-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 35px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 18px;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}

.filter-btn.active, .filter-btn:hover {
  background: var(--accent);
  color: var(--white);
}

/* Product Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 25px;
}

.product-card {
  background: var(--white);
  border-radius: 6px;
  border: 1px solid var(--border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-cat {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
}

.product-title {
  font-size: 1.1rem;
  margin: 5px 0;
  color: var(--navy);
}

.product-price {
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 15px;
}

.card-actions {
  margin-top: auto;
  display: flex;
  gap: 10px;
}

/* Workshop Grid */
.workshop-section {
  background: var(--white);
}

.workshop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.workshop-card {
  padding: 30px;
  border-radius: 6px;
  background: var(--light-bg);
  border: 1px solid var(--border);
}

.card-icon {
  font-size: 2.2rem;
  color: var(--accent);
  margin-bottom: 15px;
}

.workshop-card h3 {
  margin-bottom: 10px;
  color: var(--navy);
}

/* Forms */
.form-box {
  background: var(--white);
  padding: 30px;
  border-radius: 6px;
  border: 1px solid var(--border);
  max-width: 700px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  outline: none;
}

/* Contact */
.contact-section {
  background: var(--light-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.lead {
  margin: 15px 0 25px;
  color: var(--text-gray);
}

.contact-info {
  list-style: none;
}

.contact-info li {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-info i {
  font-size: 1.4rem;
  color: var(--accent);
  margin-top: 5px;
}

/* Footer */
footer {
  background: var(--navy);
  color: var(--white);
  text-align: center;
  padding: 20px 0;
  font-size: 0.9rem;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  justify-content: center;
  align-items: center;
}

.modal-card {
  background: var(--white);
  padding: 30px;
  border-radius: 6px;
  max-width: 550px;
  width: 90%;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar, .top-bar-content { flex-direction: column; text-align: center; gap: 10px; }
  .contact-grid, .form-row { grid-template-columns: 1fr; }
  .nav-links { flex-wrap: wrap; justify-content: center; }
}
