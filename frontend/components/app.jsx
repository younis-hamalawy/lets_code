import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <navbar>
      <h1>Let's Code!</h1>
      <GreetingContainer />
      <Route path="/signin" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </navbar>


  </div>
);

export default App;
