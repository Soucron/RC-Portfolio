import React from 'react';
import style from './Footer.module.css'
import {Network} from './network/Network';
import GITHUB from '../assets/logo/footer/GITHUB.svg'
import TELEGRAM from '../assets/logo/footer/TELEGRAM.svg'


type NetworkType = {
    id: string,
    href: string,
    src: string
}
    

export  const Footer = () => {
    
    const Networks: NetworkType[] = [
            {id: 'telegram', href: 'telegram.com' , src: TELEGRAM },
            {id: 'gitHub', href: 'https://github.com/Soucron' , src: GITHUB},
        // {id: 'linkedIn', href: , src:}

    ]
    
    
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2>Novitsky Pavel</h2>
               <div className={style.networks}>
                   {Networks.map(n => {
                       return( <Network src={n.src} href={n.href}/>)
                   })}
              
               </div>
                <h2> 2023 </h2>
            </div>
        </div>
    );
};
