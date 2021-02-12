import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/index';
import StoryComp from '../../components/StoryComp'
import Footer from '../../components/Footer';

import './styles.css';

function Story() {
    const { state } = useLocation();
    console.log(state)
    const counter = state.counter
    const cartList = state.cartList
    return (
        <div className="container">
            <Header counter={counter} cartList={ cartList}/>
            <div className="story-content">
                <StoryComp/>
            </div>
            <Footer/>
        </div>
    )
}

export default Story;