import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <navbar>
      <h1>Let's Code!</h1>
      <GreetingContainer />
    </navbar>
    <Switch>
      <AuthRoute path="/signin" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
