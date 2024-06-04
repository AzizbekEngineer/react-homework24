import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);

  return (
    <header className="header container">
      <div className="header__logo">
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
      </div>
      <ul className="header__list">
        <li className="header__item">
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/wishlist">
            Wishlist <sup>{wishlistData.length}</sup>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
