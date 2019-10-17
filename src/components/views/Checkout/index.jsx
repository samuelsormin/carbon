import React, { Component } from "react"
import { Link } from "react-router-dom"
import AddAdress from "./AddAddress"

class Checkout extends Component {
  state = {
    showAddressButton: true,
    showAddressForm: false,
    // address state
    country: '',
    province: '',
    city: '',
    district: '',
    zip_code: '',
    address: ''
  }
  
  showAddressForm = () => {
    this.setState({
      showAddressForm: true
    })
    document.querySelectorAll("body")[0].classList.add('modal-open')
  }
  
  closeAddressForm = () => {
    this.setState({
      showAddressForm: false
    })
    document.querySelectorAll("body")[0].classList.remove('modal-open')
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addAddressHandler = e => {
    e.preventDefault()

    this.setState({
      showAddressButton: false
    })

    this.closeAddressForm()
  }

  render() {

    const address = () => {
      if(this.state.showAddressButton) {
        return (
          <div className="row">
            <div className="col-6 mr-1_6">
              <button className="btn-tertiary mt-1" onClick={this.showAddressForm}>Add shipping address</button>
            </div>
            <div className="col-6">
              &nbsp;
            </div>
          </div>
        )
      } else {
        return (
          <div className="wrapper">
            <p className="grey">
              {this.state.address} <br/>
              {this.state.district} District, {this.state.city} City <br/>
              {this.state.province}, {this.state.country}, {this.state.zip_code}
            </p>
            <button className="btn-clear"
             onClick={this.showAddressForm}><i className="ti-pencil"></i> Edit Address</button>
          </div>
        )
      }
    }

    const addressForm = () => {
      if(this.state.showAddressForm) {
        return <AddAdress close={this.closeAddressForm} 
                inputHandler={this.inputHandler}
                addAddressHandler={this.addAddressHandler} 
                country={this.state.country} 
                province={this.state.province}
                city={this.state.city}
                district={this.state.district}
                country={this.state.country}
                zip_code={this.state.zip_code}
                address={this.state.address} />
      }
    }

    return (
      <div>
        <div className="container-fluid cart">
          <section className="section-padding-top" id="product-cart">
            <div className="row">
              <div className="col-8 mr-3">
                <div className="col-12 wrapper">
                  <div className="wrapper-head">
                    <h2>Checkout</h2>
                  </div>
                  <div className="form-control">
                    <div className="row">
                      <div className="col-12">
                        <p className="margin-none grey mb-0_6">Full name</p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 mr-1_6">
                        <p className="margin-none grey mb-0_6">Email address</p>
                        <input type="text" />
                      </div>
                      <div className="col-6">
                        <p className="margin-none grey mb-0_6">Phone number</p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-12 mt-1">
                      { address() }
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3 wrapper">
                  <div className="wrapper-head">
                    <h2>Delivery Options</h2>
                  </div>
                  <div className="col-12 box-wrapper active">
                    <label htmlFor="standard_shipping">
                      <input type="radio" name="" id="standard_shipping"/> <strong>Standard Shipping:</strong> (free, 2-3 business days)
                    </label>
                  </div>
                  <div className="col-12 box-wrapper">
                    <label htmlFor="express_shipping">
                      <input type="radio" name="" id="express_shipping"/> <strong>Express Shipping:</strong> (free, 2-3 business days)
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-4 wrapper" style={{alignSelf:'flex-start'}}>
                <div className="wrapper-head">
                  <h2>Order Summary</h2>
                </div>
                <div className="space-between">
                  <p className="margin-none">Order Total</p>
                  <h4 className="margin-none">Rp 240.000</h4>
                </div>
                <div className="space-between mt-1">
                  <p className="margin-none">Delivery</p>
                  <h4 className="margin-none">Rp 24.000</h4>
                </div>
                <div className="space-between mt-3 pt-2 border-top">
                  <p className="margin-none">TOTAL</p>
                  <h4 className="margin-none">Rp 24.000</h4>
                </div>
                <div className="checkout">
                  <button className="btn-primary">Proceed to Payment</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        { addressForm() }
      </div>
    )
  }
}

export default Checkout