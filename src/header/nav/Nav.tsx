import React from 'react';
import style from './Nav.module.css'
import {Link} from 'react-scroll'



export type navLinkType = {
    id: string,
    title: string,
    idEl: string,
    offset: number
}

export const Nav = () => {


    let navLinks: navLinkType[] = [
        {id: '1',idEl: 'main', title: 'Main', offset: -500},
        {id: '2',idEl: 'mySkills', title: 'My skills', offset: -100},
        {id: '3',idEl: 'myProjects', title: 'My projects', offset: -200},
        {id: '4',idEl: 'contacts', title: 'Contacts', offset: -400}

    ]

    return (<ul className={style.nav}>
            {navLinks.map(l => {
                return <li key={l.id}>
                    <Link to={l.idEl}
                          className={style.navItem}
                          smooth={true}
                          duration={500}
                          spy={true}
                          activeClass={style.active}
                          offset={l.offset}
                        
                    > {l.title}</Link>
                </li>
            })}
        </ul>
    );
};

