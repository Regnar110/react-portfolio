import React from 'react';
import './projectcard.scss';

const ProjectCard = ({tittle}) => {
    return (
                <div className='card'>
                    <div className='card-header'>
                        {tittle}
                    </div>
                    <div className='card-content'>
                    </div>
                    <div className='card-footer'>
                        View this project
                    </div>
                </div>
    )
}

export default ProjectCard;