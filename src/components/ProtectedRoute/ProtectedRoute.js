import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";


import { Header } from "../Header/Header";
import { Login } from "../Login/Login";


export const ProtectedRoute = (props) => {

  //const history = useHistory();
  const user = Cookies.get("user");
  //return <Route {...props} />
  console.log("1")
  if (!!user) {
    return (
      <React.Fragment>
        <Header />
        <Route {...props} />
      </React.Fragment>
    )
  } else {
    console.log("3")
    return (<Redirect to="/login" />)
    //history.replace("/login")
  }
};
