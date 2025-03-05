import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer bg-primary text-light" style={{ background: "linear-gradient(90deg,rgb(36, 38, 38),rgb(126, 131, 138))" }}>
  <div className="container py-4">
    <div className="row">
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <h5 className="text-uppercase">ONLINE SHOPPING</h5>
        <p className="small">
          Online Shopping provides all product you need, keeping you updated with the latest trends and information from various products.
        </p>
      </div>
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <h5 className="text-uppercase">Information</h5>
        <div className="d-flex flex-column gap-2">
            <a href="/shop">All Product</a>
            <a href="#">About Us</a>
            <a href="/order-detail">Tracking Your Order</a>
        </div>
      </div>
      <div className="col-md-4 text-center">
        <h5 className="text-uppercase">Newsletter</h5>
        <p className="small">Subscribe to get the latest updates!</p>
        <form>
          <input type="email" className="form-control mb-2" placeholder="Your Email" aria-label="Email" />
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-dark">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <hr className="bg-light" />
    <div className="row">
      <div className="col text-center">
        <p className="small mb-0">&copy; 2025 Online Shopping. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
  );
}
export default Footer;
