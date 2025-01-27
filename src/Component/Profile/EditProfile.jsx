import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProfile = () => {
  const { userId } = useParams(); 
  const [fullName, setFullName] = useState('Manish Mehta');
  const [email, setEmail] = useState('mehta@gmail.com');
  const [phone, setPhone] = useState('8307936116');
  const [mobile, setMobile] = useState('8307936116');
  const [address, setAddress] = useState('Haryana');

  useEffect(() => {
    console.log(`Loading data for user ${userId}`);
  }, [userId]);

  const handleSaveChanges = () => {
    console.log('Saved Changes:', {
      fullName,
      email,
      phone,
      mobile,
      address
    });
  };

  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    <h4>{fullName}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)} 
                    />
                  </div>
                </div>
                <hr />

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                </div>
                <hr />

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} 
                    />
                  </div>
                </div>
                <hr />

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)} 
                    />
                  </div>
                </div>
                <hr />

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="button"
                      className="btn btn-primary px-4"
                      value="Save Changes"
                      onClick={handleSaveChanges} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
