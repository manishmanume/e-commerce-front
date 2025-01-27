import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import '../../assets/CSS/Contact.css';

const ContactUs = () => {
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  return (
    <>
     <nav aria-label="breadcrumb" className="main-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><a className='text-decoration-none' href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
      <div className="container shadow-lg mt-5 p-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-light p-4">
          <h3 className="text-center mb-4">Get in Touch</h3>
          <p className="text-muted text-center">
            If you have any questions or concerns, feel free to contact us. We
            are here to assist you!
          </p>
        </div>

        <div className="col-lg-6 p-4">
          <form>
            <div className="row mb-4 input_gap">
              <div className="col-lg-6 form-group position-relative">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  className={`form-control ${focused.name ? "input-focused" : ""
                    }`}
                  placeholder="Name"
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                />
                {focused.name && <label className="floating-label">Name</label>}
              </div>

              <div className="col-lg-6 form-group position-relative">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  className={`form-control ${focused.email ? "input-focused" : ""
                    }`}
                  placeholder="Email"
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                />
                {focused.email && (
                  <label className="floating-label">Email</label>
                )}
              </div>
            </div>

            <div className="form-group position-relative mb-4">
              <FaPhone className="input-icon" style={{ marginLeft: '-10px' }} />
              <input
                type="tel"
                className={`form-control ${focused.phone ? "input-focused" : ""
                  }`}
                placeholder="Phone"
                onFocus={() => handleFocus("phone")}
                onBlur={() => handleBlur("phone")}
              />
              {focused.phone && <label className="floating-label">Phone</label>}
            </div>

            <div className="form-group position-relative mb-4">
              <FaCommentDots className="input-icon" style={{ marginLeft: '-10px', marginTop: '-48px' }} />
              <textarea
                className={`form-control ${focused.message ? "input-focused" : ""
                  }`}
                rows="5"
                placeholder="Message"
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
              ></textarea>
              {focused.message && (
                <label className="floating-label">Message</label>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100 p-2 btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs