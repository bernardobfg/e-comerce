import React from 'react';
import './styles.css';
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

function Footer(){
    return (
        <footer>
            <div className="footer-text left">
                <p>Escritório: Rua Conde de Irajá, 297 - Botafogo</p>

                <p>Rio de Janeiro/Rj - CEP 04119-010</p>

                <p>Telefone: (21) 3796-3554 - Email: contato@oishī.com.br</p>
            </div>
            <div className="footer-text center">
            <p>Desenvolvido por Fluxo Consultoria</p>
                <p>© Todos os direitos reservados a Oishī Prods. Orientais Ltda ME</p>

            </div>

            <div className="footer-text right">
                <AiOutlineInstagram className="icon"/>
                <FaFacebook className="icon"/>
                <AiOutlineWhatsApp className="icon"/>
                
                
            </div>


        </footer>
    )
}

export default Footer
