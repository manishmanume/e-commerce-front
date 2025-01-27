import React from 'react';
import '../../assets/CSS/Blog.css';
import blog2 from '../../assets/image/blog2.png';
import blog1 from '../../assets/image/blog1.png';
import blog3 from '../../assets/image/blog3.png';

const Blog = () => {



  return (
    <div>
       <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><a className='text-decoration-none' href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </nav>  
      <section>
        <div className="container my-5">
          <header className="text-center mb-5">
            <h1 className="display-4">Welcome to My Blog</h1>
            <p className="lead">Sharing thoughts, stories, and ideas</p>
          </header>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={blog1}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <h5 className="card-title">How Your Favorite Online Stores Come to Life</h5>
                  <p className="card-text">
                    Shopping online is second nature for most of us these days. But have you ever wondered how your favorite e-commerce stores came to be? Let’s explore the fascinating journey that turns an idea into the seamless online shopping experience you love.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={blog2}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <h5 className="card-title">The Journey of an E-Commerce Website</h5>
                  <p className="card-text">
                    Ever wondered what it takes to create and run your favorite online store? While shopping is a seamless experience for you, a lot of effort goes into making it all work. Here’s a sneak peek into the journey that makes your shopping experience amazing.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={blog3}
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <h5 className="card-title">Mobile Shopping: Shop Anywhere, Anytime</h5>
                  <p className="card-text">
                  Download the mobile apps of your favorite e-commerce sites for a smoother, faster experience. Many apps offer push notifications for flash sales or restocks of popular items, ensuring you never miss a deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog