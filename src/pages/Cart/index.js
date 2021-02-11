import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/index';
import UserCart from '../../components/UserCart/index'
import Footer from '../../components/Footer';

import './styles.css';


function Cart() {
    const { state } = useLocation();
    console.log(state)
    const counter = state.counter
    const cartList = state.cartList
    return (
        <div className="container">
            <Header counter={counter} />
            <div className="cart-content">
                <UserCart cartList={ cartList}/>
            </div>
            <Footer/>
        </div>
    )
}


export default Cart;