import React from 'react';
import './styles.css'
import {AiFillCloseCircle} from 'react-icons/ai'

function Modal({id='modal', onClose = () => { }, name, img }) {
    
    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose()
    };


    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="modal-container">
                <div className="div-close">
                    <button className="close" onClick={onClose}>
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