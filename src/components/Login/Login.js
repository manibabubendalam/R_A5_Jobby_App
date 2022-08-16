import React from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import { Home } from "../Home/Home";

import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const history = useHistory();

  const user = Cookies.get("user");
  if (!!user) {
    return <Redirect to="/" />;
  }

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    if (username === password) {
      console.log("Login Success");
      Cookies.set("user", username);
      history.replace("/");
    } else {
      setLoginMessage("Invalid Credentials");
    }

    // const options = {
    //   method: "POST",
    //   body: {
    //     username,
    //     password,
    //   },
    //   mode: "no-cors",
    // };

    // const response = await fetch("https://apis.ccbp.in/login", options);
    // const response_json = await response.json();
    // console.log(response);
    // console.log(response_json);
  };

  return (
    <div className="app-container">
      <div className="responsive-container">
        <form onSubmit={submitForm}>
          <div className="login-form">
            <img
              className="login-image"
              src="https://thumbs.dreamstime.com/b/login-illustration-letter-cubes-forming-word-36025252.jpg"
            />
            <label className="input-label" htmlFor="username">
              Username
            </label>
            <input
              className="input-field"
              type="text"
              id="username"
              placeholder="Username"
              onChange={usernameHandler}
            ></input>
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-field"
              type="password"
              id="password"
              placeholder="Password"
              onChange={passwordHandler}
            ></input>
            <button className="button" type="submit">
              Login
            </button>
            {loginMessage && <p className="login-error">Invalid Credentials</p>}
          </div>
        </form>
      </div>
    </div>
  );
};
