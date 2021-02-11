import React from 'react';
import './styles.css';

import Menu from '../Menu/index';
import HeaderSup from '../HeaderSup/index';

function Header({counter, setCounter, cartList, setCartList}) {
    return (
        <div>
            <HeaderSup counter={counter} setCounter={setCounter} cartList={ cartList} setCartList={setCartList}/>
            
            <div className="header-container">
                <Menu counter={counter} cartList={cartList}/>
            </div>
        </div>
    )
        
        
}

export default Header;