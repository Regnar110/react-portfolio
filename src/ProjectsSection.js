import React from 'react';
import './projectsection.scss';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <div className='project-section-container'>
            <div className='section-header'>
                <div className='header'>
                    <h1>Used technologies</h1> 
                </div>
            </div>
            <div className='projects'>
                {
                    // tu będę montował komponent kary i pobierał do niego dane ze stanu aplikacji
                }
            </div>
        </div>
    )
}

export default ProjectsSection;