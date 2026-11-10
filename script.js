/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f4f7f6;
  color: #333;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 8%;
  background: #0f172a;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #38bdf8;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #38bdf8;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero p {
  color: #94a3b8;
  font-size: 1.1rem;
}

/* Catalog Sections */
.catalog-section {
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.catalog-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-left: 5px solid #0284c7;
  padding-left: 0.8rem;
}

/* Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Touch & Hover Animation Card */
.card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
  will-change: transform;
}

.img-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-info {
  padding: 1.5rem;
}

.card-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.card-info p {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.btn {
  background-color: #0284c7;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #0369a1;
}

/* Hover / Touch Active State Animation */
.card:hover, .card.active-touch {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.card:hover img, .card.active-touch img {
  transform: scale(1.08);
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem;
  background: #0f172a;
  color: #64748b;
  margin-top: 4rem;
}
