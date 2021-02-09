import React from 'react';
import './styles.css';

function Menu() {
    const list_menu = ['Nossa História', 'Produtos', 'Fale Conosco','Receitas', 'Seja um Franqueado']
    const render_list_menu = list_menu.map(page =>
        <li key={list_menu.indexOf(page)}><a className="page">{page}</a></li>
        )

    return (
        <ul className="menu">
            {render_list_menu}
        </ul>
    )
}

export default Menu;