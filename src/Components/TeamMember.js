import React, { Component } from 'react'
import './teamMember.scss'
import ReactCardFlip from 'react-card-flip'

class TeamMember extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: false
    }
  }

  handleFlip = () => {
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  render () {
    const cardFlipStyles = {
      'margin': '10px 30px'
    }
    return (
      <ReactCardFlip style={cardFlipStyles} isFlipped={this.state.isFlipped} flipSpeedBackToFront={0.2}>
        <div key='front' onMouseEnter={this.handleFlip} className='teamMember'>
          <div className='memberPhoto'></div>
          <p className='teamMemberName'>Uncle Dave</p>
          <p className='teamMemberPosition'>Company CEO</p>
        </div>
        <div key='back' onMouseLeave={this.handleFlip} className='teamMemberDesc'>
          <p className='teamMemberDescP'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illo inventore iste nam nemo nobis quibusdam quidem sapiente soluta tenetur.
          </p>
        </div>
      </ReactCardFlip>
    )
  }
}

export default TeamMember