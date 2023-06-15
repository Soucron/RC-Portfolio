import React from 'react';
import style from './MyContacts.module.css'
import EMAIL from '../../assets/logo/contacts/EMAIL.svg'
import MAP from '../../assets/logo/contacts/MAP.svg'


export const MyContacts = () => {
    return (<div className={style.myContactsContainer}>
            <div className={style.info}>
                <div className={style.infoImage}>
                    <img src={MAP} width="60px" height="60px"/>
                </div>
                <div className={style.infoText}>
                    <span className={style.mainSpan}> Address </span>
                    <span className={style.secondSpan}> Minsk, Belarus </span>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.infoImage}>
                    <img src={EMAIL} width="60px" height="60px"/>
                </div>
                <div className={style.infoText}>
                    <span className={style.mainSpan}> Email </span>
                    <span className={style.secondSpan}> novitsky.p.b@gmail.com</span>
                </div>
            </div>
        </div>


    );
};

