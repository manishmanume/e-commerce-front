import React, { useEffect } from 'react';
import carousel1 from '../../assets/image/manCar.jpg';
import carousel2 from '../../assets/image/Wocar1.jpg';
import carousel3 from '../../assets/image/Wocar.jpg';
import '../../assets/CSS/Home.css';
import ProductDeal from '../ProductPages/ProductDeal';
import AOS from 'aos';
import "aos/dist/aos.css";
import ProductList from '../ProductPages/ProductList';
import Offer from '../Offer/Offer';
import OfferCount from '../ProductPages/OfferCount';
import Category_area from '../ProductPages/Category_area';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    })
    return (
        <div>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide custom-carousel"
                data-bs-ride="carousel"
                data-bs-interval="5000"
            >
                <div className="carousel-inner container-fluid">
                    <div className="carousel-item active">
                        <img src={carousel3} className="d-block w-100" alt="..." style={{ height: '400px'}} />
                        <div class="carousel-caption d-block d-md-block small_width" >
                            <h6 data-aos='fade-left' data-aos-delay="300">Online Shopping</h6>
                            <h5 data-aos='fade-right' data-aos-delay="300">Launching Soon</h5>
                            <h1 data-aos='fade-left' data-aos-delay="300">Everything You love <br /> in one place</h1>
                            <p>Watch this place for the ultimate Shopping <br />experience-minus the crowds.</p>
                            <button className='btn btn-primary' data-aos='fade-up' data-aos-delay="300">Shop Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..." style={{ height: '400px' }}  />
                        <div class="carousel-caption carousel_caption me-auto d-block d-md-block small_width"
                            >
                            <h6 data-aos='fade-left' data-aos-delay="300">Online Shopping</h6>
                            <h5 data-aos='fade-left' data-aos-delay="300">Launching Soon</h5>
                            <h1 data-aos='fade-left' data-aos-delay="300">Everything You love <br /> in one place</h1>
                            <p>Watch this place for the ultimate Shopping <br />experience-minus the crowds.</p>
                            <button className='btn btn-primary' data-aos='fade-up' data-aos-delay="300">Shop Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel1} className="d-block w-100" alt="..." style={{ height: '400px'}} />
                        <div class="carousel-caption d-block d-md-block small_width" >
                            <h6 data-aos='fade-left' data-aos-delay="300">Online Shopping</h6>
                            <h5 data-aos='fade-left' data-aos-delay="300">Launching Soon</h5>
                            <h1 data-aos='fade-left' data-aos-delay="300">Everything You love <br /> in one place</h1>
                            <p>Watch this place for the ultimate Shopping <br />experience-minus the crowds.</p>
                            <button className='btn btn-primary' data-aos='fade-up' data-aos-delay="300">Shop Now</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <ProductDeal />
            </div>
            <div className=''>
                <ProductList />
            </div>
            <div>
                <Offer />
            </div>
            <div>
                <OfferCount />
            </div>
            <div>
                <Category_area />
            </div>
        </div>
    )
}

export default Home