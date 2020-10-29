import React, { Fragment } from 'react';
import './navbar.scss';
import github from './github.png'

const NavBar = ({menuToggle}) => { // tutaj mam w propsach menu state. menu schowane = false, wysunięte = true
   
    return(
        <Fragment>
            <nav className='navbar-container'>
                <div className='github-button-container'>
                    <img id='github-menu-image' src={github} alt=''/>
                    <span id='image-text'>My GitHub</span>

                </div>
                <div className='menu'>
                    <span id='menu-click' onClick={menuToggle}>
                        MENU
                    </span>
                    <i id='menu-icon' className='fas fa-chevron-circle-left fa-lg'></i>
                </div>
            </nav>
            <div className="menu-content">
                <div className='menu-item'>Start</div>
                <div className='menu-item'>About</div>
                <div className='menu-item'>Projects</div>
                <div className='menu-item'>Contact</div>
            </div>
        </Fragment>
    )
}

export default NavBar