import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo_img from '../../assets/image/log3.png'
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { useCart } from '../ContextAPIs/ContextApi';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { totalQuantity, fetchTotalQuantity, user, fetchWatchQuantity, totalWatchQuantity, handleLogout } = useCart()

    useEffect(() => {
        if (user && user.id) {
            setIsLoggedIn(true);
            fetchTotalQuantity(user.id);
            fetchWatchQuantity(user.id);
        } else {
            setIsLoggedIn(false);
        }
    }, [user]);


    const handleAuthClick = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    };



    return (
        <div className="main-navbar shadow-sm sticky-top">
            <div className="top-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <a className="brand-name text-decoration-none fs-5" href='/'>
                                <img className='shadow-none' style={{ height: '80px', width: '120px' }} src={logo_img} alt="" />
                            </a>
                        </div>
                        <div className="col-md-5 my-auto">
                            <form role="search">
                                <div className="input-group">
                                    <input
                                        type="search"
                                        placeholder="Search your product"
                                        className="form-control d-none d-sm-none d-md-block d-lg-block"
                                    />
                                    <button className="btn d-none d-sm-none d-md-block d-lg-block bg-white" type="submit">
                                        <i className="fa fa-search d-none d-sm-none d-md-block d-lg-block" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 my-auto d-none d-sm-none d-md-block d-lg-block">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart-item">
                                        <i className="fa fa-shopping-cart" /> Cart ({totalQuantity})
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/watchlist">
                                        <i className="fa fa-heart" /> Wishlist ({totalWatchQuantity})
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa fa-user" />{' '}
                                        {isLoggedIn ? user.email : 'Create Account'}
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                        style={{ width: '250px' }}
                                    >
                                        {isLoggedIn ? (
                                            <>
                                                <li>
                                                    <a className="dropdown-item" href="/profile">
                                                        <i className="fa fa-user" /> Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/order-detail">
                                                        <i className="fa fa-list" /> My Orders
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/watchlist">
                                                        <i className="fa fa-heart" /> My Wishlist
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/cart-item">
                                                        <i className="fa fa-shopping-cart" /> My Cart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="/"
                                                        onClick={handleLogout}
                                                    >
                                                        <i className="fa fa-sign-out" /> Logout
                                                    </a>
                                                </li>

                                            </>
                                        ) : (
                                            <li>
                                                <a className="dropdown-item" href="/login-signin">
                                                    <i className="fa fa-sign-in" /> Login
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <button
                        className="btn fs-3 d-sm-block d-md-block d-lg-none me-2"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <HiMiniBars3CenterLeft />
                    </button>

                    <a className="navbar-brand d-sm-block d-md-block d-lg-none mx-auto" href="/">
                        <img className='shadow-none' style={{ width: '90px' }} src={logo_img} alt="" />
                    </a>

                    <div className="offcanvas offcanvas-start nav_body" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body ">
                            <li className="nav-item dropdown list-unstyled Category_drop">
                                <a
                                    className="nav-link dropdown-toggle fs-6"
                                    href="#"
                                    id="navbarDropdown"
                                    role="nav-links"
                                    aria-expanded="false"
                                    aria-labelledby="navbarDropdown"
                                >
                                    All Categories
                                    <span className="custom-toggle">&#8594;</span>
                                </a>
                                <ul
                                    className="dropdown-menu drop_menu shadow-lg"
                                    style={{
                                        minWidth: "250px",
                                        borderBottom: "2px solid grey",
                                        borderLeft: "none",
                                        borderRight: "none",
                                        borderTop: "none",
                                        borderColor: "#007bff",
                                    }}
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" href="/men">
                                            Men
                                        </a>
                                    </li>
                                    <hr className="dropdown-divider ms-2 me-2 bg-primary" />
                                    <li>
                                        <a className="dropdown-item" href="/women">
                                            Women
                                        </a>
                                    </li>
                                    <hr className="dropdown-divider ms-2 me-2 bg-primary" />
                                    <li>
                                        <a className="dropdown-item" href="/kids">
                                            Kids
                                        </a>
                                    </li>
                                    <hr className="dropdown-divider ms-2 me-2 bg-primary" />
                                    <li>
                                        <a className="dropdown-item" href="/electronic">
                                            Electronic
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">

                                <li className="nav-item">
                                    <a className="nav-link" href="/shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/men">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/women">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/kids">Kids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/electronic">Electronic</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/order-detail">My Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact-us">Contact Us</a>
                                </li>
                                <li className="nav-item d-block d-md-none">
                                    {isLoggedIn ? (
                                        <a
                                            className="nav-link"
                                            href="/"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLogout();
                                                setIsLoggedIn(false);
                                            }}
                                        >
                                            Logout
                                        </a>
                                    ) : (
                                        <a className="nav-link" href="/login-signin">
                                            Login
                                        </a>
                                    )}
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="d-flex lg-d-block align-items-center">
                        <ul className="nav">
                            <li className="nav-item heart_icon d-sm-block d-md-block d-lg-none">
                                <a className="nav-link px-2" href="/cart-item">
                                    <i className="fa fa-shopping-cart"></i> ({totalQuantity})
                                </a>
                            </li>
                            <li className="nav-item heart_icon d-sm-block d-md-block d-lg-none">
                                <a className="nav-link px-2" href="/watchlist">
                                    <i className="fa fa-heart"></i> ({totalWatchQuantity})
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>



        </div>
    );
};

export default Navbar;
