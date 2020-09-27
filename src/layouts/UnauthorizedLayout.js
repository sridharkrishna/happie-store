import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import 'bootswatch/dist/lux/bootstrap.css'
// import login page 
import LoginPage from '../pages/LoginPage';

const UnauthorizedLayout = () => (
  <div className="h-100 row align-items-center">
    {
      /*
       General layout for unauthorized views like login, forgot password and so on.
      */
    }
    <Switch>
      <Route path="/auth/login" component={LoginPage} />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
)

export default UnauthorizedLayout;