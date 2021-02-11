import React from 'react';

import './styles.css';

function UserCart({ cartList }) {
    console.log(cartList)

    const renderCartList = cartList.map(product =>
        <li key={product.id} className="cart-items">
            <div className="div-image">
                <img className="image" src={ product.img}/>
            </div>

            <div className='data'>
                <p className="product_name">{product.name}</p>
                <p className="unit_price">Preço unitário: {product.price}</p>
                <p className="quantity">Quantidade: {product.quantity}</p>
                <p className="total_price_product">Preço { product.quantity * product.price}</p>
            </div>
        </li>
    )
    return (
        <div className="cart-container">
            <div className="cart">
                <ul className="cart-list">
                    {renderCartList}
                </ul>

                <div className="total">

                </div>
            </div>
        </div>
    )
}

export default UserCart;