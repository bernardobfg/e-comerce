import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import {GiHamburgerMenu} from 'react-icons/gi'

function Menu({counter}) {
    const list_menu = [
        {
            page: 'Nossa História',
            route: '/'
        },
        {
            page: 'Produtos',
            route: 'produtos'
        },
        {
            page: 'Fale Conosco',
            route: 'fale'
        },
        {
            page: 'Receitas',
            route: 'receita'
        },
        {
            page: 'Seja um Franqueado',
            route: 'franquia'
        }]
    const render_list_menu = list_menu.map(page =>
        <li key={list_menu.indexOf(page)}>
            <Link to={{
                    pathname:page.page,
                    state: {
                        counter: counter,
                    }
                }} style={{textDecoration: 'none'}}>
            <div className="page">{page.page}</div>
            </Link>
            
        </li>
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