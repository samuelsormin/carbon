import React from "react"
import { Link } from 'react-router-dom'

const ProductPanel = props => {

  const products = props.products.map(product => {
    const { _id, author, name_product, picture, price } = product
    return (
      <div key={_id} className="col-3 product">
        <div className="book-image">
          <img src={picture} alt="Book item" />
        </div>
        <div className="book-details">
          <Link to={`/details/${_id}`} className="book-title">{name_product}</Link>
          <p className="book-author">{author}</p>
          <p className="book-price">Rp {price}</p>
        </div>
      </div>
    )
  })

  return (
    <section className="section-margin" id="popular-books">
      <div className="title category-title">
        <h2>{props.title}</h2>
        <Link to="/">Show more</Link>
      </div>
      <div className="row">
        <div className="col-3 mr-3">
          <div className="banner-side">
            <img src={require('../../../assets/images/' + props.imgPanel)} alt="" />
          </div>
        </div>
        <div className="col-9" style={{ boxSizing: "border-box" }}>
          <div className="row">
            {products}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPanel