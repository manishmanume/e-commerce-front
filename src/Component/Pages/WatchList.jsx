import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import '../../assets/CSS/WatchList.css';
import { useCart } from "../ContextAPIs/ContextApi";
import axios from "axios";
import { showErrorAlert, showSuccessAlert } from "../ToastifyMessage/Toastify";

const Base_Url = import.meta.env.VITE_NODE_API_BASE_IMAGE_URL;
const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useCart();

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (!user || !user.id) {
        return;
      }

      try {
        const response = await axios.get(`${Base_Url_API}/get-watch-item`, {
          params: { userId: user.id },
        });
        setWatchlist(
          response.data.formattedData.map(product => ({
            ...product,
            currentImage: product.main_image // Initialize currentImage
          }))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, [user]);

  const handleImageClick = (productIndex, newImage) => {
    setWatchlist(prevState => {
      const updatedList = [...prevState];
      if (updatedList[productIndex].currentImage !== newImage) {
        updatedList[productIndex].currentImage = newImage;
      }
      return updatedList;
    });
  };

  const handleRemove = async (watch_id) => {
    if (!watch_id) {
      setError("Item is not available");
      return;
    }

    try {
      const response = await axios.post(`${Base_Url_API}/remove-item-watch`, { watch_id });

      if (response?.data?.ResponseCode === 1) {
        setWatchlist((prevWatchlist) =>
          prevWatchlist.filter((item) => item.watch_id !== watch_id)
        );
        showSuccessAlert(response?.data?.ResponseMessage);
      } else {
        showErrorAlert(response?.data?.ResponseMessage);
      }
    } catch (error) {
      setError("Internal problem occurred. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="container text-center">
        <h2>Please log in to view your watchlist.</h2>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-decoration-none" href="/">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Wish List
          </li>
        </ol>
      </nav>
      <section className="product_details">
        <div className="container mt-3">
          <div className="text-center">
            <h2 className="section-title px-5">
              <span className="px-2">Wish List</span>
            </h2>
          </div>

          <div className="d-flex flex-column gap-5">
            {watchlist.length === 0 ? (
              <p className="text-center mt-5">No items in your watchlist yet.</p>
            ) : (
              watchlist.map((product, index) => (
                <div key={index} className="row align-items-center">
                  <div className="col-md-6 d-flex">
                    <div className="d-flex flex-column gap-2">
                      {product.additional_images.map((image, idx) => (
                        <img
                          key={idx +1}
                          src={`${Base_Url}${image}`}
                          alt={`Additional ${idx + 1}`}
                          className="img-thumbnail"
                          style={{
                            width: "80px",
                            height: "80px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleImageClick(index, image)}
                        />
                      ))}
                    </div>

                    <div className="text-center flex-grow-1">
                      <img
                        src={`${Base_Url}${product.currentImage}`}
                        alt={product.name}
                        className="img-fluid rounded mb-2"
                        style={{ maxHeight: "350px" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-name fs-2">{product.name}</div>
                      <div
                        className="watchlist-icon"
                        style={{ cursor: "pointer", color: "blue" }}
                      >
                        <FaHeart size={24} />
                      </div>
                    </div>
                    <p className="text-muted mt-2">{product.description}</p>
                    <div className="product-price fs-4 mb-3">${product.price}</div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(product.watch_id)}
                    >
                      Remove from WishList
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WatchList;
