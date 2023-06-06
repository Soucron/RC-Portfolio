import React from 'react';
import style from './Project.module.css'


const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <a>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWmmxc7ePcQ2s1rVG5yqFLRGdpKJiM1wcl7m1MM-I2w&s' alt='some image'  />
                </a>
            </div>
            <div className={style.description}>
                <h3>Project name</h3>
                <span >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dignissimos?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quaerat?
                </span>
            </div>


        </div>
    );
};

export default Project;