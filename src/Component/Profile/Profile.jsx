import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../ContextAPIs/ContextApi";

const Profile = () => {
  const { user } = useCart();
  

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="container">
      <div className="main-body">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">User Profile</li>
          </ol>
        </nav>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-5">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src={user?.avatarUrl || "https://bootdey.com/img/Content/avatar/avatar7.png"}
                  alt="User"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>{user?.name || "User Name"}</h4>
                  <p className="text-secondary mb-1">
                    {user?.profession || "Full Stack Developer"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3"><h6 className="mb-0">Full Name</h6></div>
                  <div className="col-sm-9 text-secondary">{user?.name || "N/A"}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                  <div className="col-sm-9 text-secondary">{user?.email || "N/A"}</div>
                </div>
                <hr />
                <Link className="btn btn-info">Edit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
