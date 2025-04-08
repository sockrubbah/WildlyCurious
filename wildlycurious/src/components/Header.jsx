import React from "react";
import { Link } from "react-router-dom";
import "wildlycurious/src/pages/css/header.css";

const Header = () => {
  return (
    <body>
      <header>
        <button id="menu-toggle">Click To Navigate Sections</button>
        <nav id="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/forum">Forum</Link></li>
          </ul>
        </nav>
        <nav class="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/forum">Forum</Link></li>
        </ul>
      </nav>
      </header>
    </body>

  );
};

export default Header;