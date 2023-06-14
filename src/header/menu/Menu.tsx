import React, {useState} from 'react';
import style from './Menu.module.css'
import {Nav} from '../nav/Nav';


export const Menu = () => {

    const [toogle, setToogle] = useState(true)


    return (<>
            <div className={style.burgerWrapper}>
                <img  alt={'menu'}
                     className={style.menu}
                     onClick={() => setToogle(!toogle)}/>
            </div>

            <div className={style.burgerNav}>
                <Nav/>
            </div>
        </>
    );
};

