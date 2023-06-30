import React from 'react';
import style from './Network.module.scss';

type NetworkType = {
    src: string,
    href: string
}

export const Network = (n: NetworkType) => {
    return (
        <div className={style.network}>
            <a href= {n.href} >
                <img src ={n.src} alt='my social network'/>
            </a>
        </div>
    );
};
