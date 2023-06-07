import React from 'react';
import style from './Main.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am </h1>
                    <p>Lorem</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default Main;