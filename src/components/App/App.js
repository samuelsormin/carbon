import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "../../assets/themify-icons/themify-icons.css"
import "../../assets/scss/main.scss"

// components
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Home from "../views/Home"
import Details from "../views/Details"
import Cart from "../views/Cart"
import Checkout from "../views/Checkout"

class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" exact component={Details} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={Checkout} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App