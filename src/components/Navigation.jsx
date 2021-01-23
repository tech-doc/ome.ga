import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({ cartsCount, wishlistCount }) {
  return (
    <nav className="navigation">
      <div className="navigation__search">
        <span className="navigatoin__search-icon">
          <i className="icofont-search"></i>
        </span>
        <input
          type="text"
          name="search"
          placeholder="Search Product"
          className="navigation__search-input"
        />
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Shop
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Men
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            women
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            kid
          </Link>
        </li>
        <div className="navigation__list-icon">
          <li className="navigation__item-icon">
            <Link to="#wishlist" className="navigation__link-icon">
              <i className="icofont-list"></i>
              <sup>
                <span
                  className={
                    wishlistCount === 0
                      ? "navigation__link-badge u-vis-hidden"
                      : "navigation__link-badge"
                  }
                >
                  {wishlistCount}
                </span>
              </sup>
            </Link>
          </li>
          <li className="navigation__item-icon">
            <Link to="/cart" className="navigation__link-icon">
              <i className="icofont-shopping-cart"></i>
              <sup>
                <span
                  className={
                    cartsCount === 0
                      ? "navigation__link-badge u-vis-hidden"
                      : "navigation__link-badge"
                  }
                >
                  {cartsCount}
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
