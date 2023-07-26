import React from 'react';
import style from './Projects.module.scss'
import Project from './project/Project';
import TODOLIST from '../../src/assets/logo/projects/TODOLIST.png'
import {Slide} from 'react-awesome-reveal';

export type ProjectType = {
    href: any,
    description: string,
    name: string,
    src: any
}

const Projects = () => {

    const AllProjects: ProjectType[] = [
        {
            name: 'Todolist',
            description: 'React app created with Redux, Typescript, MUI',
            href: '', src: TODOLIST
        }]


    return (
        <div className={style.projectsBlock} id={'myProjects'}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    {AllProjects.map(p => {
                        return (<Slide triggerOnce={true} direction={'left'}>
                            <Project name={p.name} description={p.description} href={p.href} src={p.src}/>
                        </Slide>
                        )
                    })}


                </div>
            </div>
        </div>
    );
};

export default Projects;