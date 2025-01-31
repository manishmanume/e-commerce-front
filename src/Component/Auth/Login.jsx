import React, { useState } from 'react';
import '../../assets/CSS/Login.css';
import { FaUsers, FaUserTie } from 'react-icons/fa';
import { MdAttachEmail, MdPassword } from 'react-icons/md';
import { useCart } from '../ContextAPIs/ContextApi';
import { showErrorAlert, showSuccessAlert } from '../ToastifyMessage/Toastify';
import { useNavigate } from 'react-router-dom';

const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

function Login() {
    const [isActive, setIsActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setname] = useState('');
    const { setUser } = useCart();
    
    const handleRegisterClick = () => setIsActive(true);
    const handleLoginClick = () => setIsActive(false);
    
    const navigate = useNavigate();

    //#region Login API Connected
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${Base_Url_API}/user-login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
    
            const result = await response.json();
    
            if (result?.ResponseCode === 1) {
                showSuccessAlert(result?.message);
    
                const userData = { email: result.email, token: result.token };
                setUser(userData);  
                localStorage.setItem('authData', JSON.stringify(userData));
    
                setEmail('');
                setPassword('');
                navigate('/');
            } else {
                showErrorAlert(result.message || 'Login failed.');
            }
        } catch (error) {
            showErrorAlert('An error occurred while logging in. Please try again.');
        }
    };
    
    

    //#endregion

    const handleRegister = async (e) =>{
        e.preventDefault();
        try {
            const response = await fetch(`${Base_Url_API}/create-user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name, username, email,  password }),
            });

            const result = await response.json();
            console.log(result);
            
            if(result){
                showSuccessAlert('Registration successful!');
                setname('');
                setUsername('');
                setEmail('');
                setPassword('');
                navigate('/login-signin');
            }

        } catch (error) {
            showErrorAlert('An error occurred while logging in. Please try again.');
        }
    }

    return (
        <div className="login_page">
            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                <span className="rotate-bg"></span>
                <span className="rotate-bg2"></span>

                {/* Login Form */}
                <div className="form-box login">
                    <h2 className="title animation" style={{ '--i': 0, '--j': 21 }}>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input_box"
                            />
                            <label>Email</label>
                            <MdAttachEmail className="input_icons" style={{ color: email ? "blue" : "black" }}/>
                        </div>
                        <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="input_box"
                            />
                            <label>Password</label>
                            <MdPassword className="input_icons" style={{ color: password ? "blue" : "black" }}/>
                        </div>
                        <button type="submit" className="btn btn-dark animation" style={{ '--i': 3, '--j': 24 }}>
                            Login
                        </button>
                        <div className="linkTxt animation" style={{ '--i': 5, '--j': 25 }}>
                            <p>
                                Don't have an account?{' '}
                                <a href="#" onClick={handleRegisterClick}>
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="info-text login">
                    <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome Back!</h2>
                    <p className="animation" style={{ '--i': 1, '--j': 21 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Register Form */}
                <div className="form-box register">
                    <h2 className="title animation" style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
                    <form onSubmit={handleRegister}>
                        <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                            <input type="text" 
                            required 
                            className="input_box"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>Username</label>
                            <FaUserTie className="input_icons" style={{ color: username ? "blue" : "black" }}/>
                        </div>

                        <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                            <input type="text" 
                            required 
                            className="input_box"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            />
                            <label>Name</label>
                            <FaUsers className="input_icons" style={{ color: name ? "blue" : "black" }} />
                        </div>

                        <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                            <input type="text"
                             required
                             className="input_box"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             />
                            <label>Email</label>
                            <MdAttachEmail className="input_icons" style={{ color: email ? "blue" : "black" }} />
                        </div>

                        <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
                            <input type="password"
                                     required 
                                     className="input_box" 
                                     value={password}
                                     onChange={(e) => setPassword(e.target.value)}
                                     />
                            <label>Password</label>
                            <MdPassword className="input_icons" style={{ color: password ? "blue" : "black" }} />
                        </div>
                        <button type="submit" className="btn btn-dark animation" style={{ '--i': 21, '--j': 4 }}>
                            Sign Up
                        </button>
                        <div className="linkTxt animation" style={{ '--i': 22, '--j': 5 }}>
                            <p>
                                Already have an account?{' '}
                                <a href="#" onClick={handleLoginClick}>
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="info-text register">
                    <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome Back!</h2>
                    <p className="animation" style={{ '--i': 18, '--j': 1 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
