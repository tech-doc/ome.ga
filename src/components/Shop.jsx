import React from "react";
import Search from "./common/Search";

export default function Shop({
  products,
  onAddToCart,
  onAddToWishlist,
  onSearch,
}) {
  return (
    <div className="dashboard">
      <Search onSearch={onSearch} />
      <div className="row-col-3 u-margin-top-small">
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
              <div className="productCard__btn u-text-center">
                <a
                  onClick={() => onAddToCart(product)}
                  className="btn btn--primary u-border-radius-bottom"
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
