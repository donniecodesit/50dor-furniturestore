import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Product.css";

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;
    if (isInCart) removeFromCart(id);
    else addToCart(id);
  };

  render() {
    const { name, price, currency, image, isInCart } = this.props;
    return (
      <div className="product">
        <img
          src={image}
          alt="product"
          className="product-image"
          id="drop-shadow"
        />
        <div className="captions">
          <h3>{name}</h3>
          <div className="product__price">
            {price}
            {currency}
          </div>
          <div className="product__price-wrap">
            <button
              className={`btn btn-${isInCart ? "danger" : "primary"}`}
              onClick={this.handleClick}
            >
              {isInCart ? "Remove" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  currency: PropTypes.string,
  image: PropTypes.string,
  isInCart: PropTypes.bool.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
