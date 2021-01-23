import React from "react";

export default function Cart({ cartList, onRemoveFromCart }) {
  return (
    <div>
      <div className="row">
        {cartList.map((product) => (
          <div key={product._id} className="col-2">
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
                onClick={() => onRemoveFromCart(product)}
                className="btn btn--primary u-border-radius-bottom"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
