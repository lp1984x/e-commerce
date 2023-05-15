import React from "react";
import "./searchBat.scss";
import * as Icon from "react-bootstrap-icons";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <form className="searchBar__searchSection">
        <input
          className="searchBar__search"
          placeholder="Hey, what are you looking for?"
        />
        <Icon.Search className="searchBar__find" />
      </form>
      <div className="searchBar__cartSection">
        <a href="#none" className="searchBar__link">
          <Icon.Heart className="searchBar__icons" />
          <p className="d-none d-lg-inline m-0 ms-lg-2">Wishlist</p>
        </a>
        <a href="#none" className="searchBar__link">
          <Icon.Bag className="searchBar__icons" />
          <p className="d-none d-lg-inline m-0 ms-lg-2">Items</p>
        </a>
      </div>
    </div>
  );
}
