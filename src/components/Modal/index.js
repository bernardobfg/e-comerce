import React from 'react';
import './styles.css'
import {AiFillCloseCircle} from 'react-icons/ai'

function Modal({ name, img }) {
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="div-close">
                    <button className="close">
                        <AiFillCloseCircle/>
                    </button>
                </div>
                
                   
                <div className="content">
                    <h3>{name} adicionado ao carrinho</h3>
                    <img className="img" src={img}/>
                </div>
                
            </div>
        </div>
    )
}


export default Modal;