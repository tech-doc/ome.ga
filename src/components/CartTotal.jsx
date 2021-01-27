import React from "react";

export default function CartTotal({ items, totalPrice }) {
  return (
    <div>
      <div className="cartTotal u-neg-margin-top-big">
        <div className="cartTotal__content u-margin-bottom">
          <div className="cartTotal__content-bold">Total</div>
          <div className="cartTotal__content-light">${totalPrice}</div>
        </div>
        <a className="btn btn--primary">Buy now</a>
      </div>
    </div>
  );
}
