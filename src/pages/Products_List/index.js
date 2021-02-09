import React from 'react';
import './styles.css';
import Header from '../../components/Header/index';
import Products from '../../components/Products/index';

function Products_List() {
    return (
        <div className="container">
            <Header />
            <div className="products-container">
                <Products/>
            </div>
            
        </div>
        
    )
};

export default Products_List;