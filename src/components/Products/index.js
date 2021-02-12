import React from 'react';
import './styles.css';
import Product from '../Product/index';
import Arroz from '../../assets/arroz.jfif';
import Alga from '../../assets/alga.jpg';
import Shoyu from '../../assets/shoyu.jfif';
import Teriaky from '../../assets/teriaky.jpg';
import Wasabi from '../../assets/wasabi2.jpg';
import Yakissoba from '../../assets/yakissoba.jpg';
import Bonecas from '../../assets/bonecas2.jpg';
import kitJapa from '../../assets/kit-japa.jpg';
import Vaso from '../../assets/vaso2.jpg';
import Bonsai from '../../assets/bonsai.jpg'
import Sake from '../../assets/sake.jpg'
import Gergelim from '../../assets/gergelim.jpg'



function Products({counter, setCounter, cartList, setCartList}) {
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
        {
            id: 7,
            name: 'Kit-Japa',
            price: 5.5,
            img: kitJapa
        },
        {
            id: 8,
            name: 'Bonecas',
            price: 12.50,
            img: Bonecas
        },
        {
            id: 9,
            name: 'Vaso',
            price: 32.00,
            img: Vaso
        },
        {
            id: 10,
            name: 'Bonsai',
            price: 34.50,
            img: Bonsai
        },

        {
            id: 11,
            name: 'Sake',
            price: 50.50,
            img: Sake
        },

        {
            id: 12,
            name: 'Gergelim',
            price: 4.50,
            img: Gergelim
        }
        
    ]
    const render_products_list = products_list.map(product =>
        
        <Product key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} counter={counter} setCounter={setCounter} cartList={ cartList} setCartList={setCartList}/>
        )

    return (
        <div className="products">{render_products_list}</div>
        
        
    )
}

export default Products