import React from 'react';
import './styles.css';

import Menu from '../Menu/index';
import HeaderSup from '../HeaderSup/index';

function Header({counter, setCounter}) {
    return (
        <div>
            <HeaderSup counter={counter} setCounter={setCounter}/>
            
            <div className="header-container">
                <Menu counter={counter}/>
            </div>
        </div>
    )
        
        
}

export default Header;