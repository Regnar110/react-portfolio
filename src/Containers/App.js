import React, {Component, Fragment} from 'react';
import AboutSection from '../Components/AboutSection';
import './App.scss';
import LandingSection from '../Components/LandingSection.js';
import NavBar from '../Components/NavBar'
import {techObject} from '../tech-object.js';
import TechSection from '../Components/TechSection.js'
import ProjectsSection from '../Components/ProjectsSection.js'; // tu będą zwracane projectCard komponent
import {projects} from '../projects';
import ContactSection from '../Components/ContactSection';
import {scrollTargetsArray} from '../scrollTargetsArray';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: false,
      technologies: techObject, // obiekty svg sekcji technologies
      scrollTo: scrollTargetsArray, // obiekt dla celów scrollowania i czasu scrolowania
      projects: projects, // obiekt dla kart projektów i dla modalu projektu
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

  smoothScrolling = (scrollTarget, duration) => { // funkcja smooth scroling
    let target = document.querySelector(scrollTarget); // target staje się parametrem przekazanych z komponentu navbar przy wywoływaniu funkcji
    let targetPosition = target.getBoundingClientRect().top - 60;
    let startPosition = window.pageYOffset;
    let startTime = null;
    const animationScroll = (currentTime) => {
      if(startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, targetPosition, duration); // parametry dla funkcji ease
      window.scrollTo(0,run); //0 to scrolowanie w osi Y a 1 to w osi X czyli uruchamiamy "run" w osi Y
      if(timeElapsed < duration) requestAnimationFrame(animationScroll);
    }
    
    const ease = (t, b, c, d) =>{ // funkcja ze stony gizma (easing functions w google!!)
      t /= d/2;
      if(t<1) return c/2 *t * t +b;
      t--;
      return -c / 2 * (t * (t-2) - 1) + b;
    }
  requestAnimationFrame(animationScroll);
  }

  render() {
    return(
      <Fragment>
        <NavBar menuToggle={this.menuOnOff} scrollFunction={this.smoothScrolling} scroll={this.state.scrollTo}/>
        <LandingSection  scrollFunction={this.smoothScrolling} scroll={this.state.scrollTo}/>
        <AboutSection />
        <TechSection techs={this.state.technologies}/>
        <ProjectsSection projects={this.state.projects}/>
        <ContactSection />
      </Fragment>
    )
  }
}

export default App;
