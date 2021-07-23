import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products">
        {this.props.products.map(product =>(
            <li key={product._id}>
            <div className="product">
            <a href={"#"+ product._id}>
              <img src={product.image} alt={product.title}></img>
              {product.title}
            </a>
            <div className="product-price">
            <div>
            {product.price}
            </div>
            <button className="button primary">Add to Cart</button>
            </div>
            </div>
            </li>
        ))}
        </ul>
      </div>
    )
  }
}

