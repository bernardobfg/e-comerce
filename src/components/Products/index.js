import React from 'react';
import './styles.css';
import Product from '../Product/index';
import Arroz from '../../assets/arroz.jfif';
import Alga from '../../assets/alga.jpg';
import Shoyu from '../../assets/shoyu.jfif';
import Teriaky from '../../assets/teriaky.jpg';
import Wasabi from '../../assets/wasabi2.jpg';
import Yakissoba from '../../assets/yakissoba.jpg'


function Products({counter, setCounter}) {
    const products_list = [
        {   
            id: 1,
            name: "Arroz",
            price: 20.00,
            img: Arroz
        },
        {   
            id: 2,
            name: "Alga",
            price: 10.00,
            img: Alga
        },

        {   
            id: 3,
            name: "Wasabi",
            price: 8.50,
            img: Wasabi
        },

        {   
            id: 4,
            name: "Shoyu",
            price: 7.60,
            img: Shoyu
        },

        {   
            id: 5,
            name: "Teriaky",
            price: 8.00,
            img: Teriaky
        },

        {   
            id: 6,
            name: "Yakissoba",
            price: 10.50,
            img: Yakissoba
        },
        
    ]
    const render_products_list = products_list.map(product =>
        
        <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} counter={counter} setCounter={setCounter}/>
        )

    return (
        <div className="products">{render_products_list}</div>
        
        
    )
}

export default Products