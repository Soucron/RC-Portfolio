import React from 'react';
import style from './Header.module.css'
import {Nav} from './nav/Nav';
import {Menu} from './menu/Menu';

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            {/*<Menu/>*/}
        </div>
    );
};

export default Header;