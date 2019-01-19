import React, { Component } from 'react'
import './slider.scss'
import house1 from '../images/house1.jpg'
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.png'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slide: 0
    }
    this.myRef = React.createRef()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.slide === this.state.slide) {
      if (this.props.activeSection === 3) {
        window.scrollTo({
          top: this.myRef.current.offsetTop - 10,
          behavior: 'smooth'
        });
      }
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      if (this.state.slide < 2) {
        this.setState ({
          slide: this.state.slide + 1
        })
      } else {
        this.setState ({
          slide: 0
        })
      }
    }, 3200);
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {

    let opacity;

    if (this.state.slide === 0) {
      opacity = [1,0,0]
    } else if (this.state.slide === 1) {
      opacity = [0,1,0]
    } else {
      opacity = [0,0,1]
    }

    const houseStyles = ['url(' + house1 + ')', 'url(' + house2 + ')', 'url(' + house3 + ')'];

    return (
      <section className='slider oontainer' ref={this.myRef}>
        <p className='slider__header'>Sample Ofers</p>
        {houseStyles.map((house, index) => {
          return <div key={house} className='slider__images__div container' style={
            {
              backgroundImage: house,
              opacity: opacity[index]}
          }></div>
        })}
      </section>
    )
  }
}

export default Slider