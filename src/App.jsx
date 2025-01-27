import React, { useState, useEffect, Suspense, lazy } from 'react';
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

// Lazy Loading Components
const Home = lazy(() => import('./Component/Pages/Home'));
const Shop = lazy(() => import('./Component/Pages/Shop'));
const WomenCategory = lazy(() => import('./Component/Pages/WomenCategory'));
const MenCategory = lazy(() => import('./Component/Pages/MenCategory'));
const KidsCategory = lazy(() => import('./Component/Pages/KidsCategory'));
const ElectronicCategory = lazy(() => import('./Component/Pages/ElectronicCategory'));
const Blog = lazy(() => import('./Component/Pages/Blog'));
const ContactUs = lazy(() => import('./Component/Pages/ContactUs'));
const AllCategory = lazy(() => import('./Component/Pages/AllCategory'));
const Cart = lazy(() => import('./Component/Pages/Cart'));
const WatchList = lazy(() => import('./Component/Pages/WatchList'));
const ProductPage = lazy(() => import('./Component/SingleProduct/ProductPage'));
const Login = lazy(() => import('./Component/Auth/Login'));
const Profile = lazy(() => import('./Component/Profile/Profile'));
const EditProfile = lazy(() => import('./Component/Profile/EditProfile'));
const CheckoutForm = lazy(() => import('./Component/CheckOutForm/CheckoutForm'));
const OrderDetail = lazy(() => import('./Component/Pages/OrderDetails'));

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
            <Suspense fallback={<Loading />}>
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
            </Suspense>
            <Footer />
          </BrowserRouter>
        )}
      </CartProvider>
    </HelmetProvider>
  );
};

export default App;
