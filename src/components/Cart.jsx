import React from "react";
import CartTotal from "./CartTotal";

export default function Cart({
  cartList,
  onRemoveFromCart,
  onQuantityPlus,
  onQuantityMinus,
}) {
  const totalPrice = () => {
    let totalPrice = 0;
    cartList.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };
  return (
    <div>
      <div className="row-col-2-1">
        <div className="row-col-1 col-second cartCard__margin">
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
                  <div className="u-margin-bottom-small">
                    <span className="cartCard__quantity">
                      <span
                        onClick={() => onQuantityPlus(product)}
                        className="cartCard__quantity-icon"
                      >
                        <i className="icofont-plus"></i>
                      </span>

                      <span className="cartCard__quantity-value">
                        {product.quantity}
                      </span>
                      <span
                        onClick={() => onQuantityMinus(product)}
                        className="cartCard__quantity-icon"
                      >
                        <i className="icofont-minus"></i>
                      </span>
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveFromCart(product)}
                    className="cartCard__btn btn btn--primary u-border-radius-bottom"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CART TOTAL  */}
        <div className="col-first">
          <CartTotal items={cartList.length} totalPrice={totalPrice()} />
        </div>
      </div>
    </div>
  );
}
