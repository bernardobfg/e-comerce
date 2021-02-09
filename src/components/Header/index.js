import React from 'react';
import './styles.css';

import Menu from '../Menu/index';
import HeaderSup from '../HeaderSup/index';

function Header({counter}) {
    return (
        <div>
            <HeaderSup counter={ counter}/>
            
            <div className="header-container">
                <Menu />
            </div>
        </div>
    )
        
        
}

export default Header;