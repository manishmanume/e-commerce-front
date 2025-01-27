import React, {useEffect} from 'react';
import './ProductDeal.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import service_img1 from '../../assets/image/services1.png';
import service_img2 from '../../assets/image/services2.png';
import service_img3 from '../../assets/image/services3.png';
import service_img4 from '../../assets/image/services4.png';


const Category_area = () => {
useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    })

  return (
    <div className="categories-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center">
                            <div data-aos='fade-right' data-aos-delay="300" className="cat-icon">
                            <img className='shadow-none' src={service_img1} alt="" />
                            </div>
                            <div className="cat-cap"  data-aos='fade-left' data-aos-delay="200">
                                <h5>Fast & Free Delivery</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center">
                            <div className="cat-icon"  data-aos='fade-right' data-aos-delay="300">
                                <img className='shadow-none' src={service_img2} alt="" />
                            </div>
                            <div className="cat-cap"  data-aos='fade-left' data-aos-delay="200">
                                <h5>Secure Payment</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center">
                            <div className="cat-icon"  data-aos='fade-right' data-aos-delay="300">
                                <img className='shadow-none' src={service_img3} alt="" />
                            </div>
                            <div className="cat-cap"  data-aos='fade-left' data-aos-delay="200">
                                <h5>Money Back Guarantee</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-cat mb-50 wow fadeInUp text-center">
                            <div className="cat-icon"  data-aos='fade-right' data-aos-delay="300">
                                <img className='shadow-none' src={service_img4} alt="" />
                            </div>
                            <div className="cat-cap"  data-aos='fade-left' data-aos-delay="200">
                                <h5>Online Support</h5>
                                <p>Free delivery on all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Category_area