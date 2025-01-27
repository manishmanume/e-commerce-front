import React, { useState } from "react";
import { MdDeleteForever, MdOutlineRefresh } from "react-icons/md";
import { useCart } from "../ContextAPIs/ContextApi";
import axios from 'axios';
import { showErrorAlert } from "../ToastifyMessage/Toastify";
import '../../assets/CSS/Cart.css';
import { Link } from "react-router-dom";

const Base_Url = import.meta.env.VITE_NODE_API_BASE_IMAGE_URL;
const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

const Cart = () => {
  const { cart, setCart, removeFromCart, user } = useCart();
  const [cartItems] = useState(cart);


  if (!cart || cart.length === 0) {
    return (
      <div className="empty-cart">
        <img
          style={{
            height: '400px', width: '700px', display: 'block',
            margin: '0 auto',
          }}
          src="https://static.vecteezy.com/system/resources/thumbnails/016/462/240/small/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
          alt="Empty Cart"
        />
        <div className="container text-center py-4">
          {user ? (
            <h2>Your cart is empty!</h2>
          ) : (
            <h2>Please create an account to view your cart.</h2>
          )}
        </div>

      </div>
    );
  }


  const handleQuantityChangePlus = async (cartId) => {
    if (!cartId) {
      showErrorAlert('Invalid input. Please provide a valid cartId.');
      return;
    }

    try {
      const response = await axios.put(`${Base_Url_API}/update-item-plus`, { cartId });

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error('Error updating cart item:', error.response?.data || error.message);
    }
  };

  const handleQuantityChangeMinus = async (cartId) => {
    if (!cartId) {
      showErrorAlert('Invalid input. Please provide a valid cartId.');
      return;
    }

    try {
      const response = await axios.put(`${Base_Url_API}/update-item-minus`, { cartId });

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } catch (error) {
      console.error('Error updating cart item:', error.response?.data || error.message);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleCheckout = () => {
    if (user) {
      navigate('/check-out');
    } else {
      showErrorAlert('User not found. Please log in first.');
      navigate('/login-signin');
    }
  };


  const calculateTotal = (quantity, productPrice) => {
    return (quantity || 0) * (productPrice || 0);
  };


  const calculateGrandTotal = () =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);

  return (
    <div className="container-fluid mt-5">
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item "><a className='text-decoration-none' href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">My Cart</li>
        </ol>
      </nav>
      <section className="shopping-cart row">
        <div className="col-lg-8 col-md-12 mb-4">
          <div className="text-center">
            <h2 className="section-title px-5">
              <span className="px-2">Shopping Cart</span>
            </h2>
          </div>
          <table className="table text-center align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={`${item.productId}-${index}`}>
                  <td>
                    <img
                      style={{ height: "60px" }}
                      src={`${Base_Url}${item.images}`}
                      alt="Product"
                    />
                  </td>
                  <td>{item.productName}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleQuantityChangeMinus(item.cartId)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => handleQuantityChangePlus(item.cartId)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>${item.productPrice}</td>
                  <td>${calculateTotal(item.quantity, item.productPrice)}</td>
                  <td className="text-danger">
                    <MdDeleteForever
                      size={24}
                      onClick={() => removeFromCart(item.cartId)}
                      style={{ cursor: "pointer" }}
                    />

                    <MdOutlineRefresh
                      size={24}
                      style={{ cursor: "pointer", color: 'green' }}
                      onClick={handleRefresh}
                    />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        <div className="col-lg-4 col-md-12 mt-5">
          <div className="bg-light p-4 rounded shadow-sm">
            <h2 className="text-center mb-4">Order Summary</h2>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${calculateGrandTotal()}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Discount:</span>
              <span>$0</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>$0</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4">
              <strong>Grand Total:</strong>
              <strong>${calculateGrandTotal()}</strong>
            </div>
            <Link to='/check-out' className="text-text-decoration-none" onClick={handleCheckout}>
              <button className="btn btn-primary w-100">Checkout</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
