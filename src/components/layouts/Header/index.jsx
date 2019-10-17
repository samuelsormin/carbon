import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { authState } from '../../../redux/actions/Auth/authState'
import "./header.scss"
import Login from "../../views/Login"
import SignUp from "../../views/Register"

class Header extends Component {
  state = {
    showLoginForm: false,
    showSignUpForm: false
  }

  showLogin = () => {
    this.setState({
      showLoginForm: true,
      showSignUpForm: false
    })
    document.querySelectorAll("body")[0].classList.add('modal-open')
  }

  closeLogin = () => {
    this.setState({
      showLoginForm: false
    })
    document.querySelectorAll("body")[0].classList.remove('modal-open')
  }

  showSignUp = () => {
    this.setState({
      showSignUpForm: true,
      showLoginForm: false
    })
    document.querySelectorAll("body")[0].classList.add('modal-open')
  }

  closeSignUp = () => {
    this.setState({
      showSignUpForm: false
    })
    document.querySelectorAll("body")[0].classList.remove('modal-open')
  }

  logout = () => {
    sessionStorage.removeItem('auth_token')
    window.location.href = "/"
  }

  componentDidMount = () => {
    this.props.authState()
  }

  render() {

    const loginForm = () => {
      if (this.state.showLoginForm === true) {
        return <Login 
                closeLogin={this.closeLogin}
                showSignUp={this.showSignUp} />
      }
    }

    const signUpForm = () => {
      if (this.state.showSignUpForm === true) {
        return <SignUp 
                closeSignUp={this.closeSignUp}
                showLogin={this.showLogin}
                modal={this.state.modal} />
      }
    }

    const menuHeader = () => {
      if(this.props.isToken || this.props.isAuthenticated === true) {
        return (
          <div className="menu-text">
            <button 
              className="btn-clear bordered ml-1" 
              onClick={this.logout} >Logout</button>
          </div>
        )
      } else {
        return (
          <div className="menu-text">
            <button 
              className="btn-clear" 
              onClick={this.showLogin}>Log In</button>
            <button 
              className="btn-clear bordered"
              onClick={this.showSignUp}>Sign Up</button>
          </div>
        )
      }
    }

    return (
      <div>
        <header>
          <div className="col-8 row vcenter">
            <div className="header-logo">
              <Link to="/">
                <img src={require('../../../assets/images/logo.png')} alt="Carbon logo" />
              </Link>
            </div>
            <div className="header-search">
              <input type="text" name="" id="" placeholder="What you want to read?" />
            </div>
          </div>
          <div className="col-4">
            <div className="header-menu">
              <span>
                <Link to="/cart"><i className="ti-shopping-cart"></i></Link>
              </span>
              { menuHeader() }
            </div>
          </div>
        </header>
        { loginForm() }
        { signUpForm() }
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isToken: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(
  mapStateToProps,
  { authState }
)(Header)