import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import User from '../../models/user'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      User.authenticated() === true
        ? <Component {...props} />
        : <Redirect to='/welcome' />
    )} />
);

export default PrivateRoute;