import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessAlert = (message) =>{
    toast.success(message, {
        position:"top-right",
        autoClose:"3000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress:undefined,
        theme:"light"
    });
};

export const showErrorAlert = (message) =>{
    toast.error(message, {
        position:"top-right",
        autoClose:"3000",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress:undefined,
        theme:"light"
    });
};

export const showWarningAlert = (message) => {
    toast.warning(message, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        className: "custom-toast-warning",
        bodyClassName: "custom-toast-body",
        style: {
            backgroundColor: "#01497c", 
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold", 
        },
    });
};
