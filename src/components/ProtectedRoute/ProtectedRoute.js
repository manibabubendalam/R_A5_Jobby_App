import React from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";

import { Header } from "../Header/Header";

export const ProtectedRoute = (props) => {
  //const username = Cookies.get("username");
  //return <Route {...props} />
//   if (true) {
    return (
      <React.Fragment>
        {//<Header />
        }
        <Route {...props} />
      </React.Fragment>
    )
//   } else {
//     return <Route path="/login" component={Login} />;
//   }
};
