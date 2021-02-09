import React, { useState } from 'react';
import './styles.css';
import { FiUser } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLogoAlipay } from 'react-icons/io5'





function HeaderSup({counter}) {
    

    
    return (
        <div className="header-sup-container">
            <div className="div-imagem">
                <div className="logo"><IoLogoAlipay/><p>Oishī</p></div>
            </div>

            <div className="div-input">
                <input type="text" placeholder="O que você deseja?" />
                <button className="search"><AiOutlineSearch/></button>
            </div>

            <div className="div-icons">
                <a><FiUser className="user" /></a>
                <a><AiOutlineShoppingCart className="cart" /></a>
                <span className="counter">{counter}</span>
            </div>
        </div>
    )
}

export default HeaderSup;