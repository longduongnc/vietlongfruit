import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/products/products';
import ProductDetailPage from './pages/products/detail';
import ContactPage from './pages/contacts/contactpage';
import CertificatePage from './pages/certificates/certificate';
import AboutPage from './pages/abouts/abouts';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* <Route path="/product/:productName" element={<ProductDetailPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);


