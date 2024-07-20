import React from "react";
import "./Navbar.css";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
function navbar() {
  return (
    <nav>
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="opensidebar">
        <img src={menu} alt="" height={32} width={32} />
      </label>
      <label htmlFor="sidebar-active" id="overlay">
    
      </label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="closesidebar">
          <img src={close} alt="" height={32} width={32} />
        </label>
        <a href="" className="home">Home</a>
        <a href="">about</a>
        <a href="">project</a>
        <a href="">Blog</a>
        <a href="">Login</a>
      </div>
    </nav>
  );
}

export default navbar;
