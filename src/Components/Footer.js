import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {

  blockRefresh = (e) => {
    e.preventDefault();
  }

  render () {
    return (
      <footer className='container'>
        <p>Choose Your Home</p>
        <div>
          <a onClick={this.blockRefresh} href='/'><i className="fab fa-facebook"></i></a>
          <a onClick={this.blockRefresh} href='/'><i className="fab fa-twitter-square"></i></a>
          <a onClick={this.blockRefresh} href='/'><i className="fab fa-instagram"></i></a>
          <a onClick={this.blockRefresh} href='/'><i className="fas fa-at"></i></a>
        </div>
      </footer>
    )
  }
}

export default Footer