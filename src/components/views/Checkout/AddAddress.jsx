import React, { Component } from 'react'

class AddAddress extends Component {
  render() {
    return (
      <div className="overlay row hcenter vcenter">
        <div className="wrapper-auth">
          <span className="close-auth ti-close"
           onClick={this.props.close}></span>
          <h2 className="text-center margin-top-none">Shipping Address</h2>
          <div className="form-control">
            <form onSubmit={this.props.addAddressHandler}>
              <input type="text" name="country" placeholder="Country" 
               onChange={this.props.inputHandler}
               value={this.props.country} required />
               
              <input type="text" name="province" placeholder="Province" 
               onChange={this.props.inputHandler}
               value={this.props.province} required />
               
              <input type="text" name="city" placeholder="City" 
               onChange={this.props.inputHandler}
               value={this.props.city} required />
               
              <input type="text" name="district" placeholder="District" 
               onChange={this.props.inputHandler}
               value={this.props.district} required />
               
              <input type="text" name="zip_code" placeholder="ZIP Code" 
               onChange={this.props.inputHandler}
               value={this.props.zip_code} required />
               
              <textarea name="address" id="" rows="3" placeholder="Address"
               onChange={this.props.inputHandler} required>{this.props.address}</textarea>
              <button className="btn-primary" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddAddress