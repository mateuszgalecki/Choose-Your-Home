import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.menuRef = React.createRef()
  }

  goToAbout = this.props.goToAbout;

  goToTeam = this.props.goToTeam;

  goToSlider = this.props.goToSlider;

  goToContact = this.props.goToContact;

  render () {
    return (
      <div className='container'>
        <div id='underMenu'></div>
        <nav className='menuNav' id='menu'>
          <ul className='menu'>
            <li className='link'><a href='/' onClick={this.goToAbout}>About</a></li>
            <li className='link'><a href='/' onClick={this.goToTeam}>Team</a></li>
            <li className='link'><a href='/' onClick={this.goToSlider}>Sample Ofers</a></li>
            <li className='link'><a href='/' onClick={this.goToContact}>Contact</a></li>
          </ul>
          <div className='logo'>Choose Your Home</div>
        </nav>
      </div>
    )
  }
}

export default Menu;