import React from "react";

export default function Cart({ cartList, onRemoveFromCart }) {
  return (
    <div>
      <div className="row-col-1">
        {cartList.map((product) => (
          <div key={product._id} className="col-1">
            <div className="cartCard">
              <img
                src={product.picture}
                alt={product.title}
                className="cartCard__picture"
              />
              <div className="cartCard__content">
                <h3 className="heading__secondary">{product.title}</h3>
                <h3 className="heading__tertiary u-margin-bottom-small">
                  <sup className="sub-unit">$</sup>
                  {product.price}
                </h3>
                <button
                  onClick={() => onRemoveFromCart(product)}
                  className="cartCard-btn btn btn--primary u-border-radius-bottom"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
