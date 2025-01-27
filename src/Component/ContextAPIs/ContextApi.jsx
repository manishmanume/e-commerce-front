import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { showErrorAlert, showSuccessAlert } from '../ToastifyMessage/Toastify';


const CartContext = createContext();

const Base_Url_API = import.meta.env.VITE_NODE_API_BASE_URL;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 
  const [totalQuantity, setTotalQuantity] = useState(0); 
  const [totalWatchQuantity, setTotalWatchQuantity] = useState(0); 
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('authData')) || null);
  
  const userId = user?.id || '';
  
  

//#region Fetch Cart Detail from Database
useEffect(() => {
  const fetchCartDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Base_Url_API}/get-cartitem`, {
        params: { userId : user.id },
      });
      const result = response.data.cartDetails || [];

      if (Array.isArray(result) && result.length > 0) {
        setCart(result);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error('Error fetching cart details:', error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchCartDetails();
}, [userId]);
  //#endregion

  //#region Get user from local Storage
  const setUserFromStorage = () => {
    const storedAuth = localStorage.getItem('authData');
    if (storedAuth) {
      setUser(JSON.parse(storedAuth));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authData");
    setUser(null);
  };
  
  useEffect(() => {
    setUserFromStorage();
  }, []);


  //#endregion
  
  //#region Fetch user from database
  useEffect(() => {
    const fetchUser = async () => {
      if (!user?.email) return;
      try {
        const { data } = await axios.post(`${Base_Url_API}/get-user`, { email: user.email });
        if (data.ResponseCode === 1) {
          setUser(data.User);
        } else {
          showErrorAlert(data.ResponseMessage || "Unable to fetch user data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUser();
  }, [user]);

  //#endregion
  
  //#region Product Add To Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1, }];
    });
  };
//#endregion

//#region Remove Item From Cart
const removeFromCart = async (productId) => {
  try {
    const response = await axios.post(`${Base_Url_API}/remove-item`, {
      cartItemId: productId,
    });

    const result = response.data;

    if (result?.ResponseCode === 1) {
      showSuccessAlert(result.ResponseMessage);

      setCart((prevCart) => prevCart.filter((item) => item.cartId !== productId));
    } else {
      showErrorAlert(result.ResponseMessage);
    }
  } catch (error) {
    console.error('Error while removing item:', error.message);
  }
};

  //#endregion

//#region Get Cart Quantity 
const fetchTotalQuantity = async () => {
  if (!user || !user.id) {
      setMessage("User is not logged in. Unable to fetch cart quantity.");
      return;
  }

  setLoading(true);
  try {
      const response = await axios.get(`${Base_Url_API}/get-cart-quantity`, {
          params: { userId: user.id }
      });
      if (response.data.totalQuantity !== undefined) {
          setTotalQuantity(response?.data?.totalQuantity);
      } else {
          setMessage('Failed to fetch total quantity. Please try again later.');
      }
  } catch (error) {
      setMessage('Failed to fetch total quantity. Please try again later.');
  } finally {
      setLoading(false);
  }
};



//#endregion

//#region Fetch Watch Quantity from database

const fetchWatchQuantity = async () => {
  if (!user && !user.id) {
    setMessage("User is not logged in. Unable to fetch cart quantity.");
    return;
  }

  try {
    const response = await axios.get(`${Base_Url_API}/get-total-watch`, {
              params: { userId: user.id }
          });

          if (response?.data?.totalQuantity !== undefined) {
            setTotalWatchQuantity(response?.data?.totalQuantity)
        } else {
            setMessage('Failed to fetch total quantity. Please try again later.');
        }
         
  } catch (error) {
    setMessage('Failed to fetch total quantity. Please try again later.');
  }
  
};

//#endregion

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalQuantity,
        fetchTotalQuantity,
        loading,
        message,
        user, setUser,
        fetchWatchQuantity,
        totalWatchQuantity,
        handleLogout
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
