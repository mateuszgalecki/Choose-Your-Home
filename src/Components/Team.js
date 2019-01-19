import React, { Component } from 'react';
import './team.scss';
import TeamMember from './TeamMember'

class Team extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
  }

  componentDidUpdate() {
    if (this.props.activeSection === 2) {
      window.scrollTo({
        top: this.myRef.current.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    console.log(this.myRef.current.offsetTop);
  }

  render () {
    const teamMembers = [1, 1, 1, 1] // could be the data for each member
    return (
      <section ref={this.myRef} className='team'>
        <div style={{height: '100%', width: '100%'}} className='container team'>
          <p className='team__header'>Our Team</p>
          <div className='team__div'>
            {teamMembers.map((item, index) => {
              return <TeamMember key={index}/>
            })}
            <p> </p>
          </div>
        </div>
      </section>
    )
  }
}

export default Team