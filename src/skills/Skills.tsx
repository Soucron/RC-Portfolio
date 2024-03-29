import React from 'react';
import style from './Skills.module.scss'
import Skill from './skill/Skill';
import CSS from '../../src/assets/logo/skills/CSS.svg'
import GIT from '../../src/assets/logo/skills/GIT.svg'
import HTML from '../../src/assets/logo/skills/HTML.svg'
import JS from '../../src/assets/logo/skills/JS.svg'
import REACT from '../../src/assets/logo/skills/REACT.svg'
import REDUX from '../../src/assets/logo/skills/REDUX.svg'
import TS from '../../src/assets/logo/skills/TS.svg'
import STORYBOOK from '../../src/assets/logo/skills/STORYBOOK.svg'
import JEST from '../../src/assets/logo/skills/JEST.svg'
import {Slide} from 'react-awesome-reveal';


export type SkillType = {
    id: number
    title: string,
    img: any,

}

const Skills = () => {

    const AllSkills: SkillType[] = [
        {id: 1, title: 'HTML', img: HTML},
        {id: 2, title: 'CSS', img: CSS},
        {id: 3, title: 'JS', img: JS},
        {id: 4, title: 'TS', img: TS},
        {id: 5, title: 'GIT', img: GIT},
        {id: 6, title: 'REACT', img: REACT},
        {id: 7, title: 'REDUX', img: REDUX},
        {id: 8, title: 'STORYBOOK', img: STORYBOOK},
        {id: 9, title: 'JEST', img: JEST}
    ]


    return (
        <div className={style.skillsBlock} id={'mySkills'}>
            <div className={style.skillsContainer}>
                <h2 className={style.title}>Skills</h2>
                <ul className={style.skills}>
                    {AllSkills.map(s => {
                        return <Slide direction={'right'} triggerOnce={true}>
                            <li key={s.id}>
                                <Skill title={s.title} img={s.img}/>
                            </li>
                        </Slide>
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Skills;