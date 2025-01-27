import React, { useEffect, useState } from 'react';
import '../../assets/CSS/Home.css';
import img_sale from '../../assets/image/product-sale.png'

const OfferCount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(); 
    targetDate.setDate(targetDate.getDate() + 3); 

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="categories spad container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="categories__text">
              <h2>
                Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories__hot__deal">
              <img className='shadow-none' src={img_sale} alt="" />
              <div className="hot__deal__sticker">
                <span>Sale Of</span>
                <h5>$29.99</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="categories__deal__countdown">
              <span className='mt-4'>Deal Of The Week</span>
              <h2>Multi-pocket Chest Bag Black</h2>
              <div className="categories__deal__countdown__timer" id="countdown">
                <div className="cd-item">
                  <span>{timeLeft.days}</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>{timeLeft.hours}</span>
                  <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>{timeLeft.minutes}</span>
                  <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>{timeLeft.seconds}</span>
                  <p>Seconds</p>
                </div>
              </div>
              <a href="/shop" className="text-decoration-none primary-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCount;
