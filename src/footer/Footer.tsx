import React from 'react';
import style from './Footer.module.css'
import Network from './network/Network';



const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2>Navitski Pavel</h2>
               <div className={style.networks}>
                <Network/>
                <Network/>
                <Network/>
                <Network/>
                <Network/>
                <Network/>
                <Network/>
                <Network/>
               </div>
                <h2> 2023 </h2>
            </div>
        </div>
    );
};

export default Footer;