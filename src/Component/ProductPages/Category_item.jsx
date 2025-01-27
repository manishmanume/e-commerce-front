import React from 'react'

const Category_item = () => {
    return (
        <div>
            <section className="items-product1 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-items mb-20">
                            <div className="items-img">
                                <img  src="assets/img/gallery/items1.jpg" alt="" />
                            </div>
                            <div className="items-details">
                                <h4><a href="pro-details.html">Men's Fashion</a></h4>
                                <a href="pro-details.html" className="browse-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-items mb-20">
                            <div className="items-img">
                                <img src="assets/img/gallery/items2.jpg" alt="" />
                            </div>
                            <div className="items-details">
                                <h4><a href="pro-details.html">Women's Fashion</a></h4>
                                <a href="pro-details.html" className="browse-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="single-items mb-20">
                            <div className="items-img">
                                <img src="assets/img/gallery/items3.jpg" alt="" />
                            </div>
                            <div className="items-details">
                                <h4><a href="pro-details.html">Baby Fashion</a></h4>
                                <a href="pro-details.html" className="browse-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Category_item;