import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Component/Navbar/Navbar';
import MagicCursor from './Component/MagicCursor/MagicCursor';
import Footer from './Component/Footer/Footer';
import Loading from './Component/Loading/Loading';
import { CartProvider } from './Component/ContextAPIs/ContextApi';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Home from './Component/Pages/Home';
import Shop from './Component/Pages/Shop';
import WomenCategory from './Component/Pages/WomenCategory';
import MenCategory from './Component/Pages/MenCategory';
import KidsCategory from './Component/Pages/KidsCategory';
import ElectronicCategory from './Component/Pages/ElectronicCategory';
import Blog from './Component/Pages/Blog';
import ContactUs from './Component/Pages/ContactUs';
import AllCategory from './Component/Pages/AllCategory';
import Cart from './Component/Pages/Cart';
import WatchList from './Component/Pages/WatchList';
import ProductPage from './Component/SingleProduct/ProductPage';
import Login from './Component/Auth/Login';
import Profile from './Component/Profile/Profile';
import EditProfile from './Component/Profile/EditProfile';
import CheckoutForm from './Component/CheckOutForm/CheckoutForm';
import OrderDetail from './Component/Pages/OrderDetails';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <CartProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          limit={5}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <BrowserRouter>
            <MagicCursor />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/women" element={<WomenCategory />} />
              <Route path="/men" element={<MenCategory />} />
              <Route path="/kids" element={<KidsCategory />} />
              <Route path="/electronic" element={<ElectronicCategory />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/all-category" element={<AllCategory />} />
              <Route path="/cart-item" element={<Cart />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/login-signin" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-profile/:userId" element={<EditProfile />} />
              <Route path="/check-out" element={<CheckoutForm />} />
              <Route path="/order-detail" element={<OrderDetail />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </CartProvider>
    </HelmetProvider>
  );
};

export default App;
