import React from 'react'

import './styles.css'

import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

function ContactComp() {

    const remove = () => {
        document.getElementById('email').value = ''
        document.getElementById('name').value = ''
        document.getElementById('msg').value = ''
    }


    return (
        <div className="contact">
            <h2>Quer falar algo com a gente? Deixe uma mensagem, em breve entraremos em contato</h2>
            <h3>
                Ou se preferir, entre em contato por meio de nossas redes sociais
                <div className="contact-icon">
                <AiOutlineInstagram className="icon"/>
                <FaFacebook className="icon"/>
                <AiOutlineWhatsApp className="icon"/>
                 
            </div>
            </h3>
            <div className="contact-data">
                <input type="text" className="contact-name" placeholder="Nome" id="name"/>
                <input type="text" className="contact-email" placeholder="E-mail" id="email"/>
            </div>
            <div className="contact-msg">
                <textarea placeholder="Digite sua mensagem" id="msg"/>
            </div>

            <div className="contact-btn">
                <button onClick={remove}>
                    Enviar
                </button>
            </div>
            
        </div>
    )
}

export default ContactComp