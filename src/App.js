import React, {Component} from 'react';
import './App.scss';
import NavBar from './NavBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: false
    }
  }
  
  menuOnOff = (event) => { // rozwijanie / zwijanie menu
    const {menuStatus} = this.state;
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.transition = '0.5s ease'; // czas w jakim wysuwa się menu
    event.target.nextSibling.style.transition = '0.5s ease'; // czas tranzycji przycisku menu wraz z ikonką
    !menuStatus ? 
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

  render(){
    return(
      <NavBar menuToggle={this.menuOnOff}/>
    )
  }
}

export default App;
