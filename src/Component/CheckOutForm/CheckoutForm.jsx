import React, { useState } from 'react';
import axios from 'axios'; 
import './checkout.css';
import { useCart } from '../ContextAPIs/ContextApi';
import { showErrorAlert, showSuccessAlert } from '../ToastifyMessage/Toastify';
import { useNavigate } from 'react-router-dom';

const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

const CheckoutForm = () => {
    const { user } = useCart();
    const navigate = useNavigate(); 
    
    const [formData, setFormData] = useState({
        userId: user.id,
        customerName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: 'USA',
        paymentMethod: 'creditCard',
    });

    const [modalData, setModalData] = useState({
        show: false,
        orderId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Base_Url_API}/add-order`, formData);
            const orderId = response.data.orderId; 
            showSuccessAlert('Order Submitted');

            setModalData({
                show: true,
                orderId,
            });

            setFormData({
                userId: user.id,
                customerName: '',
                email: '',
                address: '',
                city: '',
                zip: '',
                country: 'USA',
                paymentMethod: 'creditCard',
            });
        } catch (error) {
            showErrorAlert('Product is not available. Please add to cart.');
            if (error.response) {
                console.error('Backend error details:', error.response);
            }
        }
    };

    const handleConfirm = () => {
        setModalData({ show: false, orderId: '' });
        navigate('/order-detail'); 
    };

    return (
        <div className="container my-5 py-4 shadow-lg rounded">
            <h2 className="text-center mb-4">Checkout Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                id="customerName"
                                name="customerName"
                                className="form-control"
                                value={formData.customerName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                            />
                            <label htmlFor="customerName">Full Name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Shipping Address"
                        required
                    />
                    <label htmlFor="address">Shipping Address</label>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="form-control"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                                required
                            />
                            <label htmlFor="city">City</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                className="form-control"
                                value={formData.zipCode}
                                onChange={handleChange}
                                placeholder="Zip Code"
                                required
                            />
                            <label htmlFor="zipCode">Zip Code</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <select
                        id="country"
                        name="country"
                        className="form-select"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="UK">UK</option>
                    </select>
                    <label htmlFor="country">Country</label>
                </div>

                <div className="form-floating mb-3">
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        className="form-select"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                    >
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                    <label htmlFor="paymentMethod">Payment Method</label>
                </div>

                <button type="submit" className="btn btn-primary rounded-2 w-100 py-3 mt-3 scale-on-hover">
                    Submit Order
                </button>
            </form>

            {/* Modal */}
            {modalData.show && (
                <div className="modal show d-block mt-5" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Order Confirmation</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setModalData({ show: false, orderId: '' })}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Your order has been successfully placed!</p>
                                <p><strong>Order ID:</strong> {modalData.orderId}</p>
                                <p>Click confirm to proceed.</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleConfirm}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
