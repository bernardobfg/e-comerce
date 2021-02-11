import React from 'react';
import './styles.css'
import {AiFillCloseCircle} from 'react-icons/ai'

function Forgot({id='modal', onClose = () => { } }) {
    
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
                    <h1>Esqueceu a senha?</h1>
                    <h3>Digite seu email, para enviarmos um link</h3>
                    <input type="text" placeholder="E-mail" className="email_forgot"/>
                    <button className="btn_forgot" onClick={onClose}>Enviar</button>
                </div>
                
            </div>
        </div>
    )
}


export default Forgot;