import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import NewUserComp from '../../components/NewUserComp/index'


import './styles.css';


function NewUser() {
    const { state } = useLocation();
    console.log(state)
    const counter = state.counter
    const cartList = state.cartList
    const [loginList, setloginList] = useState(state.loginList)
    return (
        <div className="container">
            <Header counter={counter} cartList={ cartList}/>
            <div className="new-user-container">
                <NewUserComp counter={counter} cartList={cartList} loginList={loginList}/>
            </div>
            <Footer/>
        </div>
    )
}


export default NewUser;