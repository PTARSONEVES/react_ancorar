import React from "react";
import { Route, redirect as Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ element: Element, isClosed, ...rest}) {
  const isLoggedIn = false;
  console.log(isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname} }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route { ...rest } element={<Element/>} />;
};

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};
