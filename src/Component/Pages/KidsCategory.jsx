import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import kids_img from '../../assets/image/kidsbanner.jpg';

const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

const KidsCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${Base_Url_API}/get-kidsitem`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  }, [])



  return (
    <div className='column_layout'>
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item "><a className='text-decoration-none' href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Kids</li>
        </ol>
      </nav>
      <section className="banner_image container-fluid">
        <img src={kids_img} style={{ height: '400px', width: '100%' }} className='kids_img' alt="Online Shop Business LinkedIn Banner" />
      </section>
      <section>
        <div className="container mt-5">
          <div className="text-center">
            <h2 className="section-title px-5"><span className="px-2">Products List</span></h2>
          </div>
          <section>
            <div className="container py-4">
              <div className="row">
                {products.map((product) => (
                  <div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-4" key={product.id}>
                    <Link to={`/product/${product.id}`} className="text-decoration-none">
                      <div className="card product-card">
                        <div className="image-container">
                        <img src={product.image_url} className="card-img-top" alt={product.name} />
                        </div>
                        <div className="card-body text-center">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">$ {product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="text-center">
            <h2 className="section-title px-5"><span className="px-2">Trendy Products</span></h2>
          </div>
          <section>
            <div className="container py-4">
              <div className="row">
                {products.map((product) => (
                  <div className="col-lg-3 col-md-4 col-sm-4 col-6 mb-4" key={product.id}>
                    <Link to={`/product/${product.id}`} className="text-decoration-none">
                      <div className="card product-card">
                        <div className="image-container">
                        <img src={product.image_url} className="card-img-top" alt={product.name} />
                        </div>
                        <div className="card-body text-center">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">$ {product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default KidsCategory;