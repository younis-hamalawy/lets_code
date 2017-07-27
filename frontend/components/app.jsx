import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import FooterContainer from './footer/footer_container';
import CitiesContainer from './cities/cities_container'
import CityContainer from './city/city_container'
import SplashContainer from './splash/splash_container'
import HostingFormContainer from './hosting/hosting_form_container'
import DashboardContainer from './dashboard/dashboard_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main-app">
      <navbar className="navbar">
        <div className="logo">
          <img src="http://res.cloudinary.com/flying-monkey/image/upload/c_scale,h_173,q_100/v1500688575/Logomakr_6c8O0u_hdqiac.png" alt="logo" height="70" width="165" className="logo-img"></img>
          <Link to="/"><h1>Let's Code!</h1></Link>
        </div>
        <GreetingContainer className="button-container"/>
      </navbar>
      <div className="main-page">
      <Switch>
        <AuthRoute exact path="/signin" component={SessionFormContainer} />
        <AuthRoute exact path="/signup" component={SessionFormContainer} />
        <Route exact path="/cities" component={CitiesContainer} />
        <ProtectedRoute exact path="/cities/:id" component={CityContainer} />
        <ProtectedRoute exact path="/hosting" component={HostingFormContainer} />
        <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
        <Route path="/" component={SplashContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
    <FooterContainer className="footer-container" />
  </div>
);

export default App;
