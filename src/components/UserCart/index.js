import React, {useState} from 'react';

import './styles.css';

function UserCart({ cartList }) {
    const [total, setTotal] = useState(0)
    const [descount, setDescount] = useState(0)
    const [descount_msg, setDescount_msg] = useState('')

    const real = value => {
        const options = { style: "currency", currency: "BRL" }
        return value.toLocaleString('pt-BR', options)
    }

    const renderCartList = cartList.map(product =>
        <li key={product.id} className="cart-items">
            <div className="div-image">
                <img className="image" src={ product.img}/>
            </div>

            <div className='data'>
                <div><p className="product_name"><strong> {product.name}</strong></p></div>
                <div><p className="unit_price">Preço unitário:<strong> {real(product.price)}</strong></p></div>
                <div><p className="quantity">Quantidade: <strong> {product.quantity}</strong></p></div>
                <div><p className="total_price_product">Total: <strong>{real( product.quantity * product.price)}</strong></p></div>
            </div>
        </li>
    
    )
    let subTotal = 0
    let indice = 0
    while (indice < cartList.length) {
        subTotal+=(cartList[indice].price * cartList[indice].quantity)
        indice ++
    }

    function changeDescount() {
        const input = document.getElementById("cupom").value
        if (input == "bernardo15") {
            setDescount(0.15 * subTotal)
            setDescount_msg('Desconto aplicado')
        }
        
    }
        
    
    


    const emptyCart = <div className="empty">Não há produtos no carrinho</div>
    return (
        <div className="cart-container">
            <div className="cart">
                <ul className="cart-list">
                    {cartList !=[] ? renderCartList : emptyCart}
                </ul>
                

                

                <div className="total">

                    <div className="subtotal_price">
                        Subtotal: {real(subTotal)}
                    </div>
                    <div className="descount">
                        Desconto: {real(descount)}
                    </div>

                    <div className="total_price">
                        Total: {real(subTotal - descount)}
                    </div>

                    <div className="div-input-cupom">
                        <input type="text" placeholder="Digite o Cupom" id="cupom" />
                        <input type="submit" onClick={changeDescount} id="submit" value="OK" />
                        <div className="msg-div"><small className="msg">{ descount_msg}</small></div>
                    </div>

                    <div className="div-btn">
                        <button className="btn">Ir para Pagamento</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserCart;