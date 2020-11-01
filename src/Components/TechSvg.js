import React from 'react';
import './techsvg.scss';

const TechSvg = (props) => {
    const {svg, desc, id} = props;
    return(
        <div className='tech-container' key={id}>
            <div className='tech' style={{backgroundImage: 'url('+svg+')'}}/>
            <div className='tech-description'>{desc}</div>
        </div>
    )
}

export default TechSvg;