import React, {useState} from 'react';
import './styles.css';
import Header from '../HeaderSup/index'
import Modal from '../Modal/index'



function Product({ id, name, price, img, counter=counter ,setCounter=setCounter}) {

    const real = value => {
        const options = { style: "currency", currency: "BRL" }
        return value.toLocaleString('pt-BR', options)
    }

    function incrementar() {
        setCounter(counter+1)
    }


    const [isModalVisible, setModalVisible] = useState(false)
    const [productModal, setProductModal] = useState('');
    const [productModalImg, setProductModalImg] = useState('');

    const showPopUp = (name, img) => {
        setProductModal(name);
        setProductModalImg(img);
        setModalVisible(true);
        incrementar();
        
        
    }



    return (
        <>
            {
                isModalVisible ? (
                    <Modal name={productModal} img={productModalImg} onClose={ () =>setModalVisible(false)}/>
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