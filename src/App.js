import React, { Component } from 'react';
import './App.css';
import WelcomeSheet from './Components/WelcomeSheet';
import About from './Components/About';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Slider from './Components/Slider';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection: 0
    }
  }

  goToAbout = (e) => {
    e.preventDefault();
    this.setState({
      activeSection: 1
    })
  }

  goToTeam = (e) => {
    e.preventDefault();
    this.setState({
      activeSection: 2
    })
  }

  goToSlider = (e) => {
    e.preventDefault();
    this.setState({
      activeSection: 3
    })
  }

  goToContact = (e) => {
    e.preventDefault();
    this.setState({
      activeSection: 4
    })
  }

  render() {
    return (
      <div className="App">
        <WelcomeSheet/>
        <Menu goToContact={this.goToContact} goToSlider={this.goToSlider} goToTeam={this.goToTeam} goToAbout={this.goToAbout}/>
        <About activeSection={this.state.activeSection}/>
        <Team activeSection={this.state.activeSection}/>
        <Slider activeSection={this.state.activeSection}/>
        <ContactForm activeSection={this.state.activeSection}/>
        <Footer/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  window.addEventListener('scroll', function (e) {
    const menu = document.getElementById('menu');
    const underMenu = document.getElementById('underMenu')
    if (window.pageYOffset > window.innerHeight) {
      menu.classList.add('fixed');
      menu.classList.add('menuBorderClass');
      underMenu.classList.add('displayIt');
    } else {
      menu.classList.remove('fixed');
      menu.classList.remove('menuBorderClass');
      underMenu.classList.remove('displayIt');
    }
  })
})

export default App;