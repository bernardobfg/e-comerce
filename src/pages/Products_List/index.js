import React, {useState} from 'react';
import './styles.css';
import Header from '../../components/Header/index';
import Products from '../../components/Products/index';
import Footer from '../../components/Footer';

function Products_List() {

    const [counter, setCounter] = useState(0);
    
    return (
        <div className="container">
            <Header counter={counter}/>
            <div className="products-container">
                <Products counter={counter} setCounter={setCounter}/>
            </div>

            <Footer/>
            
        </div>
        
    )
};

export default Products_List;