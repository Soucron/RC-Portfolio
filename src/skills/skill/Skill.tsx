import React from 'react';
import style from './Skill.module.scss'


type SkillPropsType = {
    title: string,
    img: any
}

const Skill = (s: SkillPropsType ) => {
    return (
        <div className={style.skill}>
            <img src={s.img}  alt='SvgSkillImage'/>
            <h3>{s.title}</h3>
            <span className={style.description}>

            </span>
        </div>

    );
};

export default Skill;