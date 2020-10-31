import React, { Fragment } from 'react';
import TechSvg from './TechSvg.js';
import './techsection.scss';

const TechSection = (props) => {
    const {techs} = props;
    return(
        <div className='tech-section-container'>
            <div className='section-header'>
                <div className='header'>
                    <h1>Used technologies</h1> 
                </div>
            </div>
            <div className='technologies'>
                {
                techs.map(element =>{
                    return (
                        <Fragment>
                            <TechSvg id={element.svg[0]} svg={element.svg[1]} desc={element.svg[2]}/>
                        </Fragment>
                    )
                })
                }
            </div>
        </div>
    )
}

export default TechSection;