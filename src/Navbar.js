import React from "react";
import "./Navbar.css";
import image from "./logo_kula.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img className='logo' src={image} />
        </li>
        <li>
          <a href='#product'>Product</a>
        </li>
        <li>
          <a href='#ourstory'>Our Story</a>
        </li>
        <li>
          <a href='#resources'>Resources</a>
        </li>
      </ul>
      <button className='btn'>Book a demo</button>
    </nav>
  );
};

export default Navbar;
