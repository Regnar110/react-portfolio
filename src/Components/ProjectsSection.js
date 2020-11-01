import React from 'react';
import './projectsection.scss';
import ProjectCard from '../Containers/ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsSection = (props) => {
    const {projects} = props;
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
                            <ProjectCard tittle={element.project[0]} techs={element.project[1]} desc={element.project[2]} visit={element.project[3]} code={element.project[4]} cardimage={element.project[5]}>
                                <ProjectModal/>
                            </ProjectCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsSection;