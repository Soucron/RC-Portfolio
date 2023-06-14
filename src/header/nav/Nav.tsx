import React, {useEffect, useState} from 'react';
import style from './Nav.module.css'



export type navLinkType = {
    id: string,
    title: string
}

export const Nav = () => {

    const [active, setActive] = useState('')

    let navLinks: navLinkType[] = [
        {id: '1', title: 'Main'},
        {id: '2', title: 'My skills'},
        {id: '3', title: 'My projects'},
        {id: '4', title: 'Contacts'}

    ]

    return (<ul className={style.nav}>
            {navLinks.map(l => {
                return <li key={l.id}
                           className={` ${style.hover}`}
                           onClick={() => setActive(l.title)}>
                    <a href={`#${l.id}`} className={`${active !== l.title ? style.white : style.golden}`}> {l.title}</a>
                </li>
            })}
        </ul>
    );
};

