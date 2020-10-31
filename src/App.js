import React, {Component, Fragment} from 'react';
import AboutSection from './AboutSection';
import './App.scss';
import LandingSection from './LandingSection.js';
import NavBar from './NavBar'
import {techObject} from './tech-object.js';
import TechSection from './TechSection.js'
import ProjectsSection from './ProjectsSection.js'; // tu będą zwracane projectCard komponent
import {projects} from './projects'

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: false,
      technologies: techObject,
      projects: projects
    }
  }
  
  menuOnOff = (event) => { // rozwijanie / zwijanie menu
    const {menuStatus} = this.state;
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.transition = '0.5s ease'; // czas w jakim wysuwa się menu
    event.target.nextSibling.style.transition = '0.5s ease'; // czas tranzycji przycisku menu wraz z ikonką
    !menuStatus ?  // operator trójskładnikowy
      this.setState({menuStatus: true}, () => { //menu ON
        menuContent.style.width = '250px';
        event.target.nextSibling.style.transform = 'rotate(-90deg)';
      })
      :
      this.setState({menuStatus: false}, () => { //menu OFF
        menuContent.style.width = '0px';
        event.target.nextSibling.style.transform = 'rotate(0deg)';
      });
}

  render() {
    return(
      <Fragment>
        <NavBar menuToggle={this.menuOnOff}/>
        <LandingSection />
        <AboutSection />
        <TechSection techs={this.state.technologies}/>
        <ProjectsSection />
      </Fragment>
    )
  }
}

export default App;
