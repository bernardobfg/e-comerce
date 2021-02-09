import React from 'react';
import './styles.css';

function Product({ id, name, price, img }) {

    const real = value => {
        const options = { style: "currency", currency: "BRL" }
        return value.toLocaleString('pt-BR', options)
    }



    return (
        <div className="product">
            <div className="div-img">
                <img src={img}/>
            </div>
            <p className="name">{name}</p>
            
            <p className="price">{real(price)}</p>

            <button>Adicionar ao carrinho</button>
        </div>
        
    )
}

export default Product