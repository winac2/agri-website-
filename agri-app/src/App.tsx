// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AuthProvider } from './utils/AuthContext';
import { LanguageProvider } from './utils/LanguageContext';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';
import FarmerDashboardPage from './pages/FarmerDashboardPage';
import ContactPage from './pages/ContactPage';
import OrderManagementPage from './pages/OrderManagementPage';
import CategoryPage from './pages/CategoryPage';
import QRpage from './pages/QRpage';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="App d-flex flex-column min-vh-100">
            <Navbar />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/agri-website-/" element={<HomePage />} />
                <Route path="/agri-website-/home" element={<HomePage />} />
                <Route path="/agri-website-/login" element={<LoginPage />} />
                <Route path="/agri-website-/signup" element={<SignupPage />} />
                <Route path="/agri-website-/product/:id" element={<ProductDetailPage />} />
                <Route path="/agri-website-/category/:category" element={<CategoryPage />} />
                <Route path="/agri-website-/cart" element={<CartPage />} />
                <Route path="/agri-website-/checkout" element={<CheckoutPage />} />
                <Route path="/agri-website-/profile" element={<ProfilePage />} />
                <Route path="/agri-website-/farmer-dashboard" element={<FarmerDashboardPage />} />
                <Route path="/agri-website-/contact" element={<ContactPage />} />
                <Route path="/agri-website-/orders" element={<OrderManagementPage />} />
                <Route path="/agri-website-/qr" element={<QRpage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App; 