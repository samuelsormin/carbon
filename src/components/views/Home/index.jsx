import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./home.scss"
import { getProducts } from '../../../redux/actions/getProducts'
import ProductPanel from "./ProductPanel"
import ImageSlider from "./ImageSlider"

class Home extends Component {

  componentDidMount = () => {
    this.props.getProducts()
  }

  render() {
    return (
      <div className="container-fluid">
        <ImageSlider />

        <ProductPanel 
         title="Popular Books"
         imgPanel="popular-books.png"
         products={this.props.products} />

        <ProductPanel 
         title="New Books"
         imgPanel="new-books.png"
         products={this.props.products} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    products: state.product.products
  }
}

export default connect(
  mapStateToProps,
  { getProducts }
)(Home)