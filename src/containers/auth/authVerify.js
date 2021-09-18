import React from 'react';
import {getSellerToken} from './getTokens';
import {
    Route,
    Redirect,
  } from "react-router-dom";

const AuthVerify = ({ children, ...rest }) => {
    const sellerToken = getSellerToken();
     return (
        <Route
        {...rest}
        render={({ location }) =>
        sellerToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AuthVerify;