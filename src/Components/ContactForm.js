import React, { Component } from 'react'
import './contactForm.scss'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      checkbox: false
    }
    this.myRef = React.createRef()
  }

  componentDidUpdate() {
    if (this.props.activeSection === 4) {
      window.scrollTo({
        top: this.myRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const text = 'hello, ' + this.state.name + '; ' + this.state.email + '\nyour message is: ' + this.state.message + ` and You ${this.state.checkbox ? 'wanna' : 'dont wanna'}`
    alert(text)
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handleCheckboxChange = (e) => {
    this.setState({
      checkbox: e.target.checked
    })
    console.log(e.target.checked)
  }

  render () {
    return (
      <section ref={this.myRef} className='contactForm container'>
        <p className='contactForm__header'>Contact Us</p>
        <div className='contactForm__formContainer'>
          <form>
            <div className='textareaDiv'>
              <p className='inputLabel'>Your message:</p>
              <textarea type="text" value={this.state.message} onChange={this.handleMessageChange}></textarea>
            </div>
            <div className='contactForm__right'>
              <div>
                <p className='inputLabel'>Your name:</p>
                <input type='name' value={this.state.name} onChange={this.handleNameChange}/>
              </div>
              <div>
                <p className='inputLabel'>Your email:</p>
                <input type='email' value={this.state.email} onChange={this.handleEmailChange}/>
              </div>
              {/*<div className='checkboxDiv'>*/}
                {/*<input type='checkbox' value={this.state.checkbox} onChange={this.handleChecboxChange}/>*/}
                {/*<p style={{margin: '0', marginLeft: '20px'}} className='inputLabel'>Do You wanna?</p>*/}
              {/*</div>*/}
              <label className="checkboxLabel">Do You wanna?
                <input type="checkbox" onChange={this.handleCheckboxChange}/>
                <span className="checkmark"></span>
              </label>
              <input type='submit' value='SEND' onClick={this.handleSubmit}></input>
            </div>
          </form>
        </div>
      </section>
    )
  }

}

export default ContactForm