import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import style from './Nav.module.css'
import { logo,menu, close} from '../assets'
const Nav = () => {
    return (
        <div className={style.nav}>
            <a  href="">Main</a>
            <a  href="">My skills</a>
            <a  href="">My projects</a>
            <a  href="">Contacts</a>

        </div>
    );
};

export default Nav;