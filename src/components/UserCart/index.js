import React from 'react';

import './styles.css';

function UserCart() {
    return (
        <div className="cart-container">
            <div className="cart">
                <ul className="cart-list">
                    <li className="cart-items">Carrinho</li>
                    <li className="cart-items">Carrinho2</li>
                </ul>

                <div className="total">

                </div>
            </div>
        </div>
    )
}

export default UserCart;