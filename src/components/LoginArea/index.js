import React, {useState} from 'react';

import './styles.css'

import Forgot from '../Forgot/index'

function LoginArea() {

    const [loginList, setloginList] = useState([
        {
            email: "bernardo@yahoo.com",
            password: '12345678'
        }
        
    ]);

    const [isModalVisible, setModalVisible] = useState(false)
    

    const loginCheck = () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        let i = 0
        while (i < loginList.length) {  
            if (loginList[i].email == email && loginList[i].password == password) {
                console.log("logado")
                return true
            }
            i++
        }
        return false
        }
        


    return (
        <>
            {
                isModalVisible ? (
                    <Forgot  onClose={ () =>setModalVisible(false)}/>
                ): null
            }
        
        <div className="login_area_container">
            <h2>Entre na sua conta</h2> 
            <div className="form">
                <input type="text"  placeholder="E-mail" id="email"/>
                <input type="password" placeholder="Senha" id="password"/>
                <button id="log" onClick={loginCheck}>
                    Entrar
                </button>
            </div>
                
        

                <div className="extra_log">
                    <div className="forgot_password">
                        <button className="btn_log" onClick={(e) => setModalVisible(true)}>Esqueceu sua senha?</button>
                    </div>

                    <div className="new">
                        <button className="btn_log">Novo por aqui? Faça já seu cadastro</button>
                    </div>
                </div>
        </div>
    </>
    )
}


export default LoginArea