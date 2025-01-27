import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './ProductPage.css';
import DesReview from "../DescriptionAndReview/Des&Review";
import axios from "axios";
import { useCart } from "../ContextAPIs/ContextApi";
import { showErrorAlert, showSuccessAlert } from "../ToastifyMessage/Toastify";

const Base_Url = import.meta.env.VITE_NODE_API_BASE_IMAGE_URL;
const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
    const { addToCart, user } = useCart();
    
    const [quantity, setQuantity] = useState(1);
    const [watchlisted, setWatchlisted] = useState(false);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
           try {
              const response = await axios.get(`${Base_Url_API}/products/${id}`);
              const productData = response?.data;
              setProduct(productData);
     
              if (productData?.images?.length > 0) {
                 setMainImage(productData.images[0]);
              }
           } catch (error) {
              console.error("Error fetching product data:", error);
           }
        };
     
        fetchData();
     }, [id]);
     

    

    const handleQuantityChange = (e) => {
        const value = Math.max(1, parseInt(e.target.value, 10) || 1);
        setQuantity(value);
    };

  
    const toggleWatchlist = async () => {
        if (!user || !user.id) {
            showErrorAlert("You need to log in to manage your watchlist.");
            return;
        }
    
        try {
            const response = await axios.post(`${Base_Url_API}/toggle-watchlist`, {
                userId: user.id,
                productId: product.id,
                product_image_id : product.id
            });
            
            const { message } = response.data;
            setWatchlisted((prev) => !prev); 
            showSuccessAlert(message);
        } catch (error) {
            
            showErrorAlert("There was an error updating your watchlist.");
        }
    };
    
    
    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    const handleAddToCart = async () => {

        if (!user || !user.id) {
            showErrorAlert("You need to log in to add items to the cart.");
            return;
        }

        const productToAdd = { 
            userId: user.id, 
            productId: product.id, 
            quantity, 
            price: product.price
        };
    
        try {
            const response = await axios.post(`${Base_Url_API}/add-to-cart`, productToAdd);
            
            addToCart({ ...product, quantity }); 
            showSuccessAlert('Product added to cart successfully!');
        } catch (error) {
            showErrorAlert('There was an error adding the product to your cart.');
        }
    };
    
    return (
        <div>
            <section className="product_details">
                <div className="container mt-3">
                    <div className="text-center">
                        <h2 className="section-title px-5">
                            <span className="px-2">Product Details</span>
                        </h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <img
                                src={`${Base_Url}${mainImage}`}
                                alt={product?.name}
                                style={{ maxHeight: '350px' }}
                                className="img-fluid rounded mb-2"
                            />
                            <div className="d-flex justify-content-center gap-2 mt-2">
                                {product?.images?.map((image, index) => (
                                    <img
                                        key={index}
                                        src={`${Base_Url}${image}`}
                                        alt={`Additional ${index + 1}`}
                                        className="img-thumbnail"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            cursor: "pointer",
                                            border: mainImage === image ? "2px solid blue" : "none",
                                        }}
                                        onClick={() => handleImageClick(image)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="product-name fs-2">{product?.name}</div>
                                <div
                                    className="watchlist-icon"
                                    style={{ cursor: "pointer", color: watchlisted ? "blue" : "gray" }}
                                    onClick={toggleWatchlist}
                                >
                                    {watchlisted ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
                                </div>
                            </div>
                            <div>
                                <ol className="list-unstyled d-flex gap-1">
                                    <li>⭐</li>
                                    <li>⭐</li>
                                    <li>⭐</li>
                                    <li>⭐</li>
                                    <li>⭐</li>
                                </ol>
                            </div>
                            <p className="text-muted mt-2">{product?.description}</p>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="size" className="me-2">Choose Size:</label>
                                    <select id="size" className="form-select">
                                        <option value="">Select Size</option>
                                        <option value="Small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Large">Large</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="quantity" className="me-2">Quantity:</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        className="form-control w-50"
                                        value={quantity}
                                        min="1"
                                        onChange={handleQuantityChange}
                                    />
                                </div>
                            </div>
                            <div className="product-price fs-4 mb-3">${product?.price}</div>
                            <button className="btn btn-primary mt-3 rounded-2" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <DesReview />
            </section>
        </div>
    );
};

export default ProductPage;
