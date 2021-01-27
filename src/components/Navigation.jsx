import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({ carts, searchValue, onSearch }) {
  const [isNavigation, setNavigation] = useState(false);

  const cartsCount = () => {
    let sum = 0;
    carts.forEach((product) => {
      sum += product.quantity;
    });
    return sum;
  };
  return (
    <nav className="navigation">
      <a
        onClick={() => setNavigation(!isNavigation)}
        className="navigation__btn"
      ></a>
      {/* <img src={logo} alt="" className="navigation__logo" /> */}
      <ul
        className={
          isNavigation
            ? "navigation__list"
            : "navigation__list navigation__list-hidden"
        }
      >
        <li
          className={
            isNavigation
              ? "navigation__item"
              : "navigation__item navigation__item-hidden"
          }
        >
          <Link to="/" className="navigation__link">
            Shop
          </Link>
        </li>
        <li
          className={
            isNavigation
              ? "navigation__item"
              : "navigation__item navigation__item-hidden"
          }
        >
          <Link to="/" className="navigation__link">
            Men
          </Link>
        </li>
        <li
          className={
            isNavigation
              ? "navigation__item"
              : "navigation__item navigation__item-hidden"
          }
        >
          <Link to="/" className="navigation__link">
            women
          </Link>
        </li>
        <li
          className={
            isNavigation
              ? "navigation__item"
              : "navigation__item navigation__item-hidden"
          }
        >
          <Link to="/" className="navigation__link">
            kid
          </Link>
        </li>
        <div className="navigation__list-icon">
          <li
            className={
              isNavigation
                ? "navigation__item-icon"
                : "navigation__item-icon navigation__item-icon-hidden"
            }
          >
            <Link to="/add-product" className="navigation__link-icon">
              <i className="icofont-plus-circle"></i>
            </Link>
          </li>

          <li
            className={
              isNavigation
                ? "navigation__item-icon"
                : "navigation__item-icon navigation__item-icon-hidden"
            }
          >
            <Link
              to={cartsCount() === 0 ? "/" : "/cart"}
              className="navigation__link-icon"
            >
              <i className="icofont-shopping-cart"></i>
              <sup>
                <span
                  className={
                    cartsCount() === 0
                      ? "navigation__link-badge u-vis-hidden"
                      : "navigation__link-badge"
                  }
                >
                  {cartsCount()}
                </span>
              </sup>
            </Link>
          </li>
        </div>
      </ul>
      <div className="navigation__btn">
        <span className="navigation__btn-icon"></span>
      </div>
    </nav>
  );
}
