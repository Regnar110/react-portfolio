import React from 'react';
import './projectmodal.scss';
import ModalTech from './ModalTech';

const ProjectModal = ({ handleClose, show, tittle, techs, desc, visit, code}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <div className="modal-main">
            <div className='modal-content'>
                <h2 className='modal-header'>{tittle}</h2>
                <div className='tech-used'>
                    <ModalTech techs={techs}/>
                </div>
                <div className='content-description'>
                  {desc}
                </div>
                <div className='visit'>
                  <button className='link-buttons'><a href={visit}>Project site</a></button>
                  <button className='link-buttons'><a href={code}>See code</a></button>
                </div>
                
            </div>        
            <button className='modal-button' onClick={handleClose}>CLOSE</button>
        </div>
      </div>
    );
  };

export default ProjectModal;
