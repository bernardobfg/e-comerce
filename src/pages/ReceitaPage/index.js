import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import Receita from '../../components/Receita/index'



import './styles.css';


function ReceitaPage() {
    const { state } = useLocation();
    console.log(state)
    const counter = state.counter
    const cartList = state.cartList

    return (
        <div className="container">
            <Header counter={counter} cartList={ cartList}/>
            <div >
                <Receita/>
            </div>
            <Footer/>
        </div>
    )
}


export default ReceitaPage;