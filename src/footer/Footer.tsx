import React from 'react';
import style from './Footer.module.css'
import Network from './network/Network';

type NetworkType = {
    id: str,
    href: string,
    src: string
}
    

export  const Footer = () => {
    
    const Networks: NetworkType [] = {
        [id: telegram, href: , src:],
        [id: linkedIn, href: , src:],
        [id: gitHub, href: , src: ]
    }
    
    
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2>Navitski Pavel</h2>
               <div className={style.networks}>
                   {Networks.map(n => {
                       return ( 
                           <Network 
                               id={n.id}
                               href={n.href}
                               src={n.src}/>
                   }
              
               </div>
                <h2> 2023 </h2>
            </div>
        </div>
    );
};
