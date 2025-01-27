import React, { useState } from 'react';
import './Loadin.css';

const Loading = () => {
 
    return (
        <div className='loading'>
            <div id="page">
                <div id="container">
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="h3">Online Shopping</div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
