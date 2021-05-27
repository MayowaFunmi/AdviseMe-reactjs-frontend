import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/Home";
import AuthHandler from "./AuthHandler";

export var PrivateRouteNew = ({ page, activepage, ...rest }) => {

  return (
    <Route
    {...rest}
      render={() =>
        AuthHandler.loggedIn() ? (
        <Home page={page} activepage={activepage} />
        ) : (
        <Redirect to="/" />
        )
      }
    />
  );
};
