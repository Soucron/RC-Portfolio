import React from 'react';
import style from './Project.module.scss'
import {ProjectType} from '../Projects';


const Project = (p: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <a>
            <img src={p.src} alt='project' className={style.icon} />
                </a>
            </div>
            <div className={style.description}>
                <h3 >{p.name}</h3>
                <span >
                    {p.description}
                </span>
            </div>

        </div>
    );
};

export default Project;