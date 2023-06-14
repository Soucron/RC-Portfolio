import React from 'react';
import style from './Skill.module.css'


type SkillPropsType = {
    title: string,
    img: any
}

const Skill = (s: SkillPropsType ) => {
    return (
        <div className={style.skill}>
            <object type='image/svg+xml' data={s.img} width='60px' height='60px'>
            <img src={s.img}  width='60px' height='60px' alt='SvgSkillImage'/>
            </object>
            <h3>{s.title}</h3>
            <span className={style.description}>

            </span>
        </div>
    );
};

export default Skill;