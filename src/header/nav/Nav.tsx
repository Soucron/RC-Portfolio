import React, {useEffect, useState} from 'react';
import style from './Nav.module.css'
import {Link} from 'react-scroll'



export type navLinkType = {
    id: string,
    title: string,
    idEl: string
}

export const Nav = () => {

    const [active, setActive] = useState('')

    let navLinks: navLinkType[] = [
        {id: '1',idEl: 'main', title: 'Main'},
        {id: '2',idEl: 'mySkills', title: 'My skills'},
        {id: '3',idEl: 'myProjects', title: 'My projects'},
        {id: '4',idEl: 'contacts', title: 'Contacts'}

    ]

    return (<ul className={style.nav}>
            {navLinks.map(l => {
                return <li key={l.id}
                           onClick={() => setActive(l.title)}>
                    <Link to={l.idEl}
                          className={style.navItem}
                          smooth={true}
                          duration={500}
                          spy={true}
                          activeClass={style.active}
                    > {l.title}</Link>
                </li>
            })}
        </ul>
    );
};

