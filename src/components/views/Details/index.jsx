import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./details.scss"
import { getProductById } from '../../../redux/actions/getProductById'

class Details extends Component {

  componentDidMount = () => {
    const book_id = this.props.match.params.id

    this.props.getProductById(book_id)
  }

  render() {

    const product = this.props.product.map(product => {
      const { _id, author, name_product, desc_product, picture, price } = product
      return (
        <section className="row section-padding-top">
          <div className="col-5 row hcenter">
            <div className="col-8">
              <img src={ picture } className="details-image" alt="Book item"/>
            </div>
          </div>
          <div className="col-7">
            <div className="details-wrapper details-desc">
              <h1 style={{ fontSize:'3.2rem' }} className="margin-top-none">{ name_product }</h1>
              <p className="margin-none grey">by { author }</p>
              <h2 className="orange">Rp { price }</h2>
              <p>
                { desc_product }
              </p>
              <div className="col-12">
                <div className="rows">
                  <div className="book-cover">
                    <h4>Cover</h4>
                    <span>
                      <label htmlFor="paperback" className="active">
                        <input type="radio" name="" id="paperback"/> Paperback
                      </label>
                    </span>
                    <span>
                      <label htmlFor="hardcover">
                        <input type="radio" name="" id="hardcover"/> Hard Cover
                      </label>
                    </span>
                  </div>
                  <div className="quantity">
                    <h4>Quantity</h4>
                    <button><i className="ti-minus"></i></button>
                    <input type="text" name="" id="" value="100" />
                    <button><i className="ti-plus"></i></button>
                  </div>
                </div>
              </div>
              <div className="section-padding-top">
                <button><span className="ti-shopping-cart"></span>&nbsp;Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
      )
    })

    return (
      <div className="container-fluid">

        { product }

        <section className="section-padding-top" id="book-information">
          <div className="col-12 details-wrapper">
            <h3 className="margin-top-none"> Book details </h3>
            <h4 className="margin-none">Hardcover&nbsp;:&nbsp;&nbsp;
            <span className="lighter">499 pages</span></h4>
            <h4 className="margin-none">Publisher&nbsp;:&nbsp;&nbsp;
            <span className="lighter">Farrar, Straus and Giroux; 1 edition (October 25, 2011)</span></h4>
            <h4 className="margin-none">Language&nbsp;:&nbsp;&nbsp;
            <span className="lighter">English</span></h4>
            <h4 className="margin-none">ISBN&nbsp;:&nbsp;&nbsp;
            <span className="lighter">9780374275631</span></h4>
            <h4 className="margin-none">Book dimensions&nbsp;:&nbsp;&nbsp;
            <span className="lighter">6.4 x 1.8 x 9.3 inches</span></h4>
            <h4 className="margin-none">Shipping weight&nbsp;:&nbsp;&nbsp;
            <span className="lighter">1.7 pounds</span></h4>
          </div>
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    product: state.product.details_by_Id
  }
}

export default connect(
  mapStateToProps,
  { getProductById }
)(Details)