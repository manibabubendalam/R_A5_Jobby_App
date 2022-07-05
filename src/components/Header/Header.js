import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1>App Logo</h1>
      </div>
      <div className="links-container">
        <h1>Home</h1>
        <h1>Jobs</h1>
        <button>Logout</button>
      </div>
    </div>
  );
};
