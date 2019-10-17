import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../../redux/actions/Auth/registerAction'
import PropTypes from 'prop-types'

class Register extends Component {
  state = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
    user_type: 'customer'
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerHandler = e => {
    e.preventDefault()
    let inputs = document.getElementsByClassName('register-input')
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      user_type: this.state.user_type
    }

    // set the data to register action
    this.props.register(data)

    // set input back to blank
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].value = ""
    }
  }

  render() {
    const signUpSuccess = () => {
      if(this.props.isRegistered === true) {
        return (
          <div className="alert alert-success mt_1_2">
            <p>Sign Up Success!</p>
          </div>
        )
      }
    }

    return (
      <div className="overlay row hcenter vcenter">
        <div className="wrapper-auth">
          <span onClick={this.props.closeSignUp} className="close-auth ti-close"></span>
          <h2 className="text-center margin-top-none mb-1">Sign Up</h2>
          <p className="text-center margin-none mb-3">Already have a Carbon account?&nbsp;
            <button 
             className="btn-clear blue"
             onClick={this.props.showLogin}>Log in</button>
          </p>
          {signUpSuccess()}
          <div className="form-control">
            <form onSubmit={this.registerHandler}>
              <input type="email" name="email" placeholder="Email address"
               onChange={this.inputHandler} required autoComplete="off"
               className="register-input" />

              <input type="text" name="first_name" placeholder="First name" 
               onChange={this.inputHandler} required autoComplete="off" 
               className="register-input" />

              <input type="text" name="last_name" placeholder="Last name"
               onChange={this.inputHandler} required autoComplete="off" 
               className="register-input" />

              <input type="text" name="username" placeholder="Username"
               onChange={this.inputHandler} required autoComplete="off" 
               className="register-input" />

              <input type="password" name="password" placeholder="Password"
               onChange={this.inputHandler} required autoComplete="off" 
               className="register-input" />

              <input type="password" name="password_confirmation" placeholder="Confirm password"
               onChange={this.inputHandler} required autoComplete="off" 
               className="register-input" />

              <button className="btn-primary" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    isRegistered: state.auth.isRegistered
  }
}

export default connect(
  mapStateToProps,
  { register }
)(Register)