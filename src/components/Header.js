import React from "react";
import { useContext } from "react";
import { useUserDetails } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useUserDetails();
  console.log("data", loggedInUser);

  // Subscribing Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  return (
    <div className="flex">
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
