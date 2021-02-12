import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/index';

import Footer from '../../components/Footer';
import ContactComp from '../../components/ContactComp'

import './styles.css';

function Contact() {
    const { state } = useLocation();
    console.log(state)
    const counter = state.counter
    const cartList = state.cartList
    return (
        <div className="container">
        <Header counter={counter} cartList={ cartList}/>
            <div className="contact-container">
            <ContactComp/>
        </div>
        <Footer/>
    </div>
    )
}

export default Contact