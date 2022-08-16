import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  const history = useHistory();

  const logoutHandler = () => {
    Cookies.remove("user");
    history.replace("/login");
  };

  return (
    <nav className="header-container">
      <div>
        <img
          className="logo-image"
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQF7qwjUW2VW1Q/company-logo_200_200/0/1617778829797?e=1667433600&v=beta&t=z0TFUQecdD-_biTGSKlt5r_tZiqcPKkkGpPOtDGTJtM"
        />
      </div>
      <div className="links-container">
        <ul className="links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
        <button className="logout-button" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </nav>
  );
};
