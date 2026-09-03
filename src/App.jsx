import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import CountryModal from './components/CountryModal';
import SlideInCard from './components/SlideInCard';
import CartDrawer from './components/CartDrawer';
import NewsletterModal from './components/NewsletterModal';
import HomePage from './pages/HomePage';
import SolitairePage from './pages/SolitairePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import DepositDeliveryPage from './pages/DepositDeliveryPage';
import WeddingRingsPage from './pages/WeddingRingsPage';
import AuthPage from './pages/AuthPage';
import CustomJewelleryPage from './pages/CustomJewelleryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import CustomerCarePage from './pages/CustomerCarePage';
import ShowcasePage from './pages/ShowcasePage';
import LooseDiamondsPage from './pages/LooseDiamondsPage';
import DiamondDetailsPage from './pages/DiamondDetailsPage';
import AccountPage from './pages/AccountPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  const isCheckoutPage = location.pathname === '/checkout';
  const isShowcasePage = location.pathname === '/showcase';
  const isLooseDiamondsPage = location.pathname === '/loose-diamonds';
  const hideGlobalUI = isAuthPage || isCheckoutPage || isShowcasePage;

  return (
    <div className="app-carat-club relative">
      {!hideGlobalUI && <Header setIsCartOpen={setIsCartOpen} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/engagement-rings/solitaire" element={<SolitairePage />} />
        <Route path="/wedding-rings" element={<WeddingRingsPage />} />
        <Route path="/custom-jewellery" element={<CustomJewelleryPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/deposit-delivery" element={<DepositDeliveryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/customer-care" element={<CustomerCarePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/loose-diamonds" element={<LooseDiamondsPage />} />
        <Route path="/diamond/:id" element={<DiamondDetailsPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>

      {!hideGlobalUI && <Footer />}
      {!hideGlobalUI && <FloatingWhatsApp />}
      {!hideGlobalUI && <BackToTop />}
      {!hideGlobalUI && <SlideInCard />}
      <CountryModal />
      <NewsletterModal />
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </div>
  );
}

export default App;
