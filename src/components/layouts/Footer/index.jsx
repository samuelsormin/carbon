import React from 'react'
import { Link } from "react-router-dom"
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
        <div className="row">
        <div className="col-7">
          <div className="row">
            <div className="col-4">
              <h4>Shopping</h4>
              <p><Link to="#">Shop</Link></p>
              <p><Link to="#">Payment</Link></p>
              <p><Link to="#">Shipping</Link></p>
            </div>
            <div className="col-4">
              <h4>About Carbon</h4>
              <p><Link to="#">About Us</Link></p>
              <p><Link to="#">Our Store</Link></p>
              <p><Link to="#">Cooperation</Link></p>
            </div>
            <div className="col-4">
              <h4>Others</h4>
              <p><Link to="#">Terms & Conditions</Link></p>
              <p><Link to="#">Help</Link></p>
              <p><Link to="#">Contact Us</Link></p>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-7">
              <div className="col-12">
                <h4>Payment</h4>
                <div className="mt_1_2">
                  <img src={require('../../../assets/images/payment/mandiri.png')} alt=""/>
                  <img src={require('../../../assets/images/payment/permata.png')} alt=""/>
                  <img src={require('../../../assets/images/payment/bni.png')} alt=""/>
                  <img src={require('../../../assets/images/payment/bri.png')} alt=""/>
                  <img src={require('../../../assets/images/payment/bca.png')} alt=""/>
                  <img src={require('../../../assets/images/payment/gopay.png')} alt=""/>
                </div>
              </div>
              <div className="col-12">
                <h4>Shipping</h4>
                <div className="mt_1_2">
                  <img src={require('../../../assets/images/shipping/kg-logistik.png')} alt=""/>
                  <img src={require('../../../assets/images/shipping/store.png')} alt=""/>
                  <img src={require('../../../assets/images/shipping/grab.png')} alt=""/>
                </div>
              </div>
            </div>
            <div className="col-5">
              <h4>Get our apps</h4>
              <div className="col-12">
                <img src={require('../../../assets/images/play-store.png')} alt=""/>
              </div>
              <div className="col-12">
                <img src={require('../../../assets/images/app-store.png')} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2019 - All rights reserved | Designed by Samuel Ebenezer</p>
      </div>
    </footer>
  )
}

export default Footer