import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import FooterContainer from './footer/footer_container';
import CitiesContainer from './cities/cities_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main-app">
      <navbar className="navbar">
        <Link to="/"><h1>Let's Code!</h1></Link>
        <GreetingContainer className="button-container"/>
      </navbar>
      <div className="main-page">
      <Switch>
        <AuthRoute path="/signin" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route path="/cities" component={CitiesContainer} />

      </Switch>
    </div>
    <FooterContainer className="footer-container" />
  </div>
);

export default App;
