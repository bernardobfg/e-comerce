import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom'

import './styles.css'


function NewUserComp({counter, cartList}) {

    const [loginList, setloginList] = useState([
        {
            email: "bernardo@yahoo.com",
            password: '12345678',
            estado: 'rj',
            cidade: 'rio de janeiro',
            cep: 22470090,
            numb: '300',
            ap: '501',
            tel: '999034878'


        }
        
    ]);

    const [isModalVisible, setModalVisible] = useState(false)
    

    const Check = () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const estado = document.getElementById("estado").value
        const cidade = document.getElementById("cidade").value
        const numb = document.getElementById("numb").value
        const ap = document.getElementById("comp").value
        const tel = document.getElementById("tel").value
        const cep = document.getElementById("cep").value
        
        const cadastro = {
            email: email,
            password: password,
            estado: estado,
            cidade: cidade,
            numb: numb,
            ap: ap,
            tel: tel,
            cep: cep
        }

        setloginList(loginList.concat(cadastro))
        console.log(loginList)
        
    }


    return (
        <>
            
        
        <div className="cadastro_area_container">
            <h2>Crie seu Cadastro</h2> 
            <div className="form">
                <input type="text"  placeholder="E-mail" id="email"/>
                <input type="password" placeholder="Senha" id="password" />
                <div className="tel_cep">
                    <input type="tel" id="tel" placeholder="Celular"/>
                    <input type="text" placeholder="CEP" id="cep"/>
                </div>
                <div className="estado_cidade">
                        <select id="estado">
                        <option value="ac">AC</option>
                        <option value="al">AL</option>
                        <option value="ap">AP</option> 
                        <option value="am">AM</option> 
                        <option value="ba">BA</option> 
                        <option value="ce">CE</option> 
                        <option value="df">DF</option> 
                        <option value="es">ES</option> 
                        <option value="go">GO</option> 
                        <option value="ma">MA</option> 
                        <option value="mt">MT</option> 
                        <option value="ms">MS</option> 
                        <option value="mg">MG</option> 
                        <option value="pa">PA</option> 
                        <option value="pb">PB</option> 
                        <option value="pr">PR</option> 
                        <option value="pe">PE</option> 
                        <option value="pi">PI</option> 
                        <option value="rn">RN</option> 
                        <option value="rs">RS</option> 
                        <option value="rj">RJ</option> 
                        <option value="ro">RO</option> 
                        <option value="rr">RR</option> 
                        <option value="sc">SC</option> 
                        <option value="sp">SP</option> 
                        <option value="se">SE</option> 
                        <option value="to">TO</option> 
                </select>
                        <input type="text" placeholder="Cidade" id="cidade" />
                        
                    </div>
                <div className="numb_comp">
                        <input type="text" placeholder="Número" id="numb" />
                        <input type="text" placeholder="Complemento" id="comp"/>
                        
                </div>
                <button id="cadastrar" onClick={Check}>
                    Cadastrar
                </button>
            </div>
                
        

                
        </div>
    </>
    )
}


export default NewUserComp