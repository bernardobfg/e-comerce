import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer';
import LoginArea from '../../components/LoginArea'

import './styles.css';


function Login() {
    const { state } = useLocation();
    console.log(state)
    const counter = state.counter
    const cartList = state.cartList
    return (
        <div className="container">
            <Header counter={counter} cartList={ cartList}/>
            <div className="login-container">
            <LoginArea/>
            </div>
            <Footer/>
        </div>
    )
}


export default Login;