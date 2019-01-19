import React, { Component } from 'react';
import './welcomeSheet.scss';

class WelcomeSheet extends Component {

  scrollDown = (e) => {
    e.preventDefault()
    const about = document.getElementById('about');
    window.scrollTo({
      top: about.offsetTop,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <section className='welcomeSheet'>
        <div className='welcomeSheetP'>
          <p className='welcome'>Choose Your home</p>
          <p className='welcomeDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto dignissimos eligendi eum eveniet totam vero.</p>
          <button onClick={this.scrollDown} className='welcomeButton'>explore our website</button>
        </div>
      </section>
    )
  }
}

export default WelcomeSheet;