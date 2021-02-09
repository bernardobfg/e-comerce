import React from 'react';
import './styles.css';

import Menu from '../Menu/index';
import HeaderSup from '../HeaderSup/index';

function Header() {
    return (
        <div>
            <HeaderSup />
            
            <div className="header-container">
                <Menu />
            </div>
        </div>
    )
        
        
}

export default Header;