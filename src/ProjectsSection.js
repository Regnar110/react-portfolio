import React from 'react';
import './projectsection.scss';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({projects}) => {
    return (
        <div className='project-section-container'>
            <div className='section-header'>
                <div className='header'>
                    <h1>My projects</h1> 
                </div>
            </div>
            <div className='projects'>
                {
                    projects.map(element => {
                        return(
                            <ProjectCard tittle={element.project[0]}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsSection;