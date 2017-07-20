import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import FooterContainer from './footer/footer_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <navbar className="navbar">
        <h1>Let's Code!</h1>
        <GreetingContainer className="button-container"/>
      </navbar>
      <div className="main-page">
      <Switch>
        <AuthRoute path="/signin" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
    <FooterContainer className="footer-container" />
  </div>
);

export default App;
