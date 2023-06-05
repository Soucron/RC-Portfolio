import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, sed?'}/>
                    <Skill title={"HTML"} description={'Lorem ised?'}/>
                    <Skill title={"CSS"} description={'Lorem ng elit. Consequuntur, sed?'}/>
                    <Skill title={"REACT"} description={'Lorem  consectetur adipisicing elit. Consequuntur, sed?'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;