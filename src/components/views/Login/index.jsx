import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../../redux/actions/Auth/loginAction'
import PropTypes from 'prop-types'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  loginHandler = e => {
    e.preventDefault()
    let inputs = document.getElementsByClassName('login-input')
    const data = {
      username: this.state.username,
      password: this.state.password
    }

    // set the data to register action
    this.props.login(data)

    // set input back to blank
    for(let i = 0; i < inputs.length; i++) {
      inputs[i].value = ""
    }
  }

  componentDidUpdate = () => {
    // close login form after user logged in
    if(this.props.isAuthenticated === true) {
      alert('Log In Success!')
      this.props.closeLogin()
    }
  }

  render() {
    return (
      <div className="overlay row hcenter vcenter">
        <div className="wrapper-auth">
          <span onClick={this.props.closeLogin} className="close-auth ti-close"></span>
          <h2 className="text-center margin-top-none mb-1">Log In</h2>
          <p className="text-center margin-none mb-3">Dont have an account?&nbsp;
            <button 
             className="btn-clear blue"
             onClick={this.props.showSignUp}>Sign up</button>
          </p>
          <div className="form-control">
            <form onSubmit={this.loginHandler}>
              <input type="email" name="username" placeholder="Email address"
               onChange={this.inputHandler} className="login-input" />
               
              <input type="password" name="password" placeholder="Password"
               onChange={this.inputHandler} className="login-input" />

              <button className="btn-primary" type="submit">Log In</button>
              <p>
                <Link to="#" className="blue">Forgot password?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  { login }
)(Login)