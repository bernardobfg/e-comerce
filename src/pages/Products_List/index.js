import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.css';
import Header from '../../components/Header/index';
import Products from '../../components/Products/index';
import Footer from '../../components/Footer';

function Products_List() {
    const { state } = useLocation();
    
    
    console.log(state)
    const [counter, setCounter] = useState(typeof state == 'undefined'? 0: state.counter);
    const [cartList, setCartList] = useState(typeof state == 'undefined'? []: state.cartList)


    
    return (
        <div className="container">
            <Header counter={counter} setCounter={setCounter} cartList={ cartList} setCartList={setCartList}/>
            <div className="products-container">
                <Products counter={counter} setCounter={setCounter} cartList={cartList} setCartList={setCartList}/>
            </div>

            <Footer/>
            
        </div>
        
    )
};

export default Products_List;