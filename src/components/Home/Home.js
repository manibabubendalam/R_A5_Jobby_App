import React from "react";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h1>You are in Home Component</h1>
        <p>You are in Home Component</p>
        <div>
          <button className="submit">Submit</button>
        </div>
      </div>
      <img
        className="home-image"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQF7qwjUW2VW1Q/company-logo_200_200/0/1617778829797?e=1667433600&v=beta&t=z0TFUQecdD-_biTGSKlt5r_tZiqcPKkkGpPOtDGTJtM"
      />
    </div>
  );
};
