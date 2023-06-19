import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../../src/common/styles/Container.module.css'
import Project from './project/Project';
import TODOLIST from '../../src/assets/logo/projects/TODOLIST.png'

export type ProjectType = {
    href: any,
    description: string,
    name: string,
    src: any
}

const Projects = () => {

    const AllProjects: ProjectType[] = [
        {name: 'Todolist',
            description: 'React app created with Redux, Typescript, MUI',
            href: '', src:TODOLIST}]


    return (
        <div className={style.projectsBlock} id={'myProjects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    {AllProjects.map(p => {
                        return(<Project name={p.name} description={p.description} href={p.href} src={p.src}/> )
                    })}


                </div>
            </div>
        </div>
    );
};

export default Projects;