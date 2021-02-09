import React from 'react';
import './styles.css';
import {GiHamburgerMenu} from 'react-icons/gi'

function Menu() {
    const list_menu = ['Nossa História', 'Produtos', 'Fale Conosco','Receitas', 'Seja um Franqueado']
    const render_list_menu = list_menu.map(page =>
        <li key={list_menu.indexOf(page)}><a className="page">{page}</a></li>
    )
    


    const mostraMenu = () => {
        let menu = document.getElementById("menu")
        if (menu.classList.contains("menu")){
            menu.classList.remove("menu")
            menu.classList.add("menu-retratil")
        }
        else {
            menu.classList.remove("menu-retratil")
            menu.classList.add("menu")
        }
        }
        

    return (
        <div className="menu-div">
            <button className="hamburger"><GiHamburgerMenu onClick={mostraMenu}/></button>
            <ul className="menu" id="menu">
                {render_list_menu}
            </ul>
        </div>
        
    )
}

export default Menu;