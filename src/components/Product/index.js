import React, {useState} from 'react';
import './styles.css';

import Modal from '../Modal/index'


function Product({ id, name, price, img }) {

    const real = value => {
        const options = { style: "currency", currency: "BRL" }
        return value.toLocaleString('pt-BR', options)
    }


    const [isModalVisible, setModalVisible] = useState(false)
    const [productModal, setProductModal] = useState('');
    const [productModalImg, setProductModalImg] = useState('');

    const showPopUp = (name, img) => {
        setProductModal(name);
        setProductModalImg(img);
        setModalVisible(true);
        console.log(isModalVisible);
        
    }



    return (
        <>
            {
                isModalVisible ? (
                    <Modal name={productModal} img={productModalImg}/>
                ): null
        }
        
            
        <div className="product">
            

            <div className="div-img">
                <img src={img}/>
            </div>
            <p className="name">{name}</p>
            
            <p className="price">{real(price)}</p>

            <button onClick={(e) => showPopUp(name,img, e)}>Adicionar ao carrinho</button>
        </div>
        
        </>    
    )
}

export default Product