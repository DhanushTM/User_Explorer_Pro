import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="user-info">
        <span className="username">Dhanush</span>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
