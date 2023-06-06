import React from 'react';
import style from './Remote.module.css'



const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={style.remote}>
            <h2>Ready for remote work</h2>
                <button className={style.remoteButton}>Hire me</button>
            </div>
        </div>
    );
};

export default Remote;