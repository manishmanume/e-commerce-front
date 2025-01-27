import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { showErrorAlert } from "../ToastifyMessage/Toastify";
import { useCart } from "../ContextAPIs/ContextApi";

const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;
const Base_Url = import.meta.env.VITE_NODE_API_BASE_IMAGE_URL;

const OrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useCart();

  useEffect(() => {
    const fetchOrder = async () => {
      if (!user || !user.id) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${Base_Url_API}/get-order-item`, {
          params: { userId: user.id },
        });
        if (response?.data) {
          setOrders(response.data);
        } else {
          showErrorAlert("Fetching error 404");
        }
      } catch (error) {
        showErrorAlert("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [user]);

  if (!user) {
    return (
      <div className="container text-center py-4">
        <h2>Please log in to view your orders.</h2>
      </div>
    );
  }

  return (
    <div className="Order_details py-4">
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a className="text-decoration-none" href="/">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Order Details
          </li>
        </ol>
      </nav>

      <div className="container mt-3">
        <div className="text-center">
          <h2 className="section-title px-5">
            <span className="px-2">Your Orders</span>
          </h2>
        </div>
      </div>

      <div className="container mt-4">
        {loading ? (
          <div>Loading...</div>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.orderId} className="row mb-4">
              <div className="col-md-4">
                <img
                  src={`${Base_Url}${order.productImage}`}
                  className="img-fluid rounded"
                  alt={order.productName}
                  style={{ objectFit: "cover", height: "200px" }}
                />
              </div>

              <div className="col-md-8">
                <div className="card shadow-lg border-0 h-100">
                  <div className="card-body">
                    <h5 className="card-title">{order.productName}</h5>
                    <p className="card-text">
                      <strong>Order ID:</strong> {order.orderId}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`badge ${
                          order.status === "Shipped"
                            ? "bg-success"
                            : order.status === "Delivered"
                            ? "bg-primary"
                            : "bg-danger"
                        }`}
                      >
                        {order.status}
                      </span>
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong>$ {order.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h3>No orders found. Please make a purchase first!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
