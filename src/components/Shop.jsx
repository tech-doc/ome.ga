import React from "react";

export default function Shop({ products, onAddToCart, onAddToWishlist }) {
  return (
    <div className="dashboard">
      <div className="row-col-3 u-neg-margin-top-big">
        {products.map((product) => (
          <div key={product._id} className="col-3">
            <div className="productCard">
              <img
                src={product.picture}
                alt={product.title}
                className="productCard__picture"
              />
              <div className="productCard__content">
                <h3 className="heading__secondary">{product.title}</h3>
                <h3 className="heading__tertiary u-margin-bottom-small">
                  <sup className="sub-unit">$</sup>
                  {product.price}
                </h3>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="btn btn--primary u-border-radius-bottom"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
