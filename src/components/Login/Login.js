import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Cookies from 'js-cookie'


import "./Login.css";



export const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginMessage, setLoginMessage] = useState("")
  const history = useHistory();

  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(password)
    if (username === password){
      console.log("Login Success");
      //Cookies.set('username', username)
      history.replace("/")
    }
    else{
      setLoginMessage("Invalid Credentials")
    }
  }

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <form onSubmit={submitForm}>
        <div className="login-form">
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
    </React.Fragment>
  );
};
