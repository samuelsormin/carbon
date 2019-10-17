import React from "react"
import { Link } from "react-router-dom"
import "./cart.scss"

const Cart = () => {
  return (
    <div className="container-fluid cart">
      <section className="section-padding-top" id="product-cart">
        <div className="row">
          <div className="col-8 wrapper">
            <div className="wrapper-head">
              <h2>Shopping Cart</h2>
              <h2>3 Items</h2>
            </div>
            <div className="thead">
              <div className="row">
                <div className="col-6">
                  <p className="grey margin-none">Book details</p>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <p className="grey margin-none center">Quantity</p>
                    </div>
                    <div className="col-6">
                      <p className="grey margin-none center">Price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tbody">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 cart-image">
                      <img src={require('../../../assets/images/books/buku1.jpg')} alt="Book item" />
                    </div>
                    <div className="col-8">
                      <h4 className="margin-none">Thinking, Fast and Slow</h4>
                      <p className="margin-none grey">Paperback</p>
                      <p className="remove">
                        <Link to="#"><i className="ti-close"></i>&nbsp;Remove</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6 cart-quantity">
                      <div className="row hcenter">
                        <button><i className="ti-minus"></i></button>
                        <input type="text" name="" id="" value="100" />
                        <button><i className="ti-plus"></i></button>
                      </div>
                    </div>
                    <div className="col-6">
                      <h4 className="margin-none center">Rp 120.000</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tbody">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 cart-image">
                      <img src={require('../../../assets/images/books/buku1.jpg')} alt="Book item" />
                    </div>
                    <div className="col-8">
                      <h4 className="margin-none">Thinking, Fast and Slow</h4>
                      <p className="margin-none grey">Paperback</p>
                      <p className="remove">
                        <Link to="#"><i className="ti-close"></i>&nbsp;Remove</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6 cart-quantity">
                      <div className="row hcenter">
                        <button><i className="ti-minus"></i></button>
                        <input type="text" name="" id="" value="100" />
                        <button><i className="ti-plus"></i></button>
                      </div>
                    </div>
                    <div className="col-6">
                      <h4 className="margin-none center">Rp 120.000</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 wrapper" style={{alignSelf:'flex-start'}}>
            <div className="wrapper-head">
              <h2>Order Summary</h2>
            </div>
            <div className="space-between">
              <p className="margin-none">Total Price</p>
              <h4 className="margin-none">Rp 240.000</h4>
            </div>
            <div className="checkout">
              {/* <button className="btn-primary">Proceed to Checkout</button> */}
              <Link to="/checkout" className="btn-primary" style={{display:'block', width:'95%', textAlign:'center', textDecoration:'none'}}>Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart