import React, { useEffect, useState } from 'react';
import './ProductDeal.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_Url_API}/get-eight-item`)
        if (response?.data) {
          setProducts(response?.data)
        }

      } catch (error) {
        setError(err.message);
      }
    }
    fetchData()
  }, [])



  return (
    <div className='container'>
      <div className="text-center">
        <h2 className="section-title px-5"><span className="px-2">Trendy Products</span></h2>
      </div>
      <section>
        <div className="container py-4">
          <div className="row">
            {products?.map((item, index) => {
              return (
                <div key={index} id={item.productId} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <Link to={`/product/${item.productId}`} className="text-decoration-none">
                  <div className="card product-card">
                    <div className="image-container">
                      <img src={item.mainImage} className="card-img-top" alt={item.name} />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">$ {item.price}</p>
                    </div>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductList;