import React from "react";

export default function Search({ onSearch }) {
  return (
    <div>
      <div className="navSearch__search u-margin-top-small">
        <span className="navSearch__search-icon">
          <i className="icofont-search-1"></i>
        </span>
        <input
          onChange={(e) => onSearch(e.currentTarget.value)}
          type="text"
          name="search"
          placeholder="Search Product"
          className="navSearch__search-input"
        />
      </div>
    </div>
  );
}
