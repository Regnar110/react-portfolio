import React, { Fragment } from 'react';
import './navbar.scss';
import github from './github.png'

const NavBar = (props) => { // tutaj mam w propsach menu state. menu schowane = false, wysunięte = true
    const {menuToggle, scrollFunction, scroll} = props;
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
                <div id='0' className='menu-item' onClick={() => scrollFunction(scroll[0].target, scroll[5].duration)}>Start</div> {/*na kliknięciu odpalamy funkcję, która wywołuje funkcje scroll z dwoma parametrami przekazywanymi do funkcji scroll. Parametr scroll target i duration - tak sie przekazuje parametry do funckji */}
                <div id='1' className='menu-item' onClick={() => scrollFunction(scroll[1].target, scroll[5].duration)}>About</div>
                <div id='2' className='menu-item' onClick={() => scrollFunction(scroll[2].target, scroll[5].duration)}>Technologies</div>
                <div id='3' className='menu-item' onClick={() => scrollFunction(scroll[3].target, scroll[5].duration)}>Projects</div>
                <div id='4' className='menu-item' onClick={() => scrollFunction(scroll[4].target, scroll[5].duration)}>Contact</div>
            </div>
        </Fragment>
    )
}

export default NavBar