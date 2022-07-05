import React from "react";
import react from "react";
import "./Login.css";

export const Login = () => {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <form>
        <div className="login-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username"></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
          <div className="button-container">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

//export default Login
