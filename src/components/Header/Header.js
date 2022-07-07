import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";

import "./Header.css";

export const Header = () => {

  const history = useHistory();

  const logoutHandler = () => {
    Cookies.remove('user')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <div>
        <h1>App Logo</h1>
      </div>
      <div className="links-container">
        <ul className="links">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/jobs">Jobs</Link></li>
        </ul>
        <button className="logout-button" onClick={logoutHandler}>Logout</button>
      </div>
    </nav>
  );
};
