import React from 'react';
import './about.scss';
import about from './about.svg';

const AboutSection = () => {
    
    return(
        <div className='about-container'>
            <div className='section-header'>
                <div className='header'>
                    <h1>About me</h1> 
                </div>
            </div>
            <div className='about-content-container'>
                <div className='about-svg-container'>
                    <img id='about-svg' src={about} alt=''/>
                </div>
                <div className='about-me-text'>     
                    <div className='about-text'>
                        I started my adventure with programming in April 2020. I take part in the ZTM: Complete Web Developer course, in which I acquired skills in the field of front-end development using the latest technologies and thanks to these latest technologies I can create modern and responsive websites. In the near future I will gain knowledge in the field of Back-end. I am a person always focused on developing my competences - it is very important to me.
                        &#128540;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;