import React from "react";
import { Route, Redirect } from "react-router";
const Parse = require("parse");

export default function ProtectedRoute({ path, component }) {
  return (
    <>
      {Parse.User.current() ? (
        <Route path={path} component={component} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
