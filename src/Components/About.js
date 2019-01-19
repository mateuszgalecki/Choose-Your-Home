import React, { Component } from 'react';
import './about.scss';

class About extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidUpdate() {
    if (this.props.activeSection === 1) {
      window.scrollTo({
        top: this.myRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  render () {
    return (
      <section id='about' ref={this.myRef} className='about container'>
        <p className='about__header'>About Us</p>
        <p className='about__desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet aut cumque, cupiditate, dignissimos dolorum, ea error hic inventore iste iure magnam placeat rem repellat similique suscipit temporibus voluptatibus! Eius fugiat fugit officia quae, quisquam ratione sapiente?</p>
      </section>
    )
  }
}

export default About;