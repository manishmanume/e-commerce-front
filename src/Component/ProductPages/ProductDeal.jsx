import React, { useEffect } from 'react';
import './ProductDeal.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { SlCalender } from 'react-icons/sl';
import { FaGift, FaShoppingBag } from 'react-icons/fa';
import { RiRefreshLine } from 'react-icons/ri';

const ProductDeal = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <section className="features mt-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay="0">
                            <div className="py-5">
                            <SlCalender style={{fontSize:'40px'}} />
                                <h4 className="element-title text-capitalize my-3">Book An Appointment</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay="300">
                            <div className="py-5">
                            <FaShoppingBag style={{fontSize: '40px'}}/>
                                <h4 className="element-title text-capitalize my-3">Pick up in store</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay="600">
                            <div className="py-5">
                            <FaGift style={{fontSize:'40px'}} />
                                <h4 className="element-title text-capitalize my-3">Special packaging</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay="900">
                            <div className="py-5">
                            <RiRefreshLine style={{fontSize:'40px'}} />
                                <h4 className="element-title text-capitalize my-3">free global returns</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDeal;
