import React from 'react';
import { Link } from 'react-router-dom';

import CitiesItem from './cities_item';

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.renderCities = this.renderCities.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllCities();
  }

  renderCities () {

    const { cities } = this.props;
    const length = cities.length;

    const first = cities.slice(0, length / 2).map(city => (
      <CitiesItem key={city.id} city={city} currentUser={this.props.currentUser} setCity={this.props.setCity} />
    ));
    const second = cities.slice(length / 2).map(city => (
      <CitiesItem key={city.id} city={city} currentUser={this.props.currentUser} setCity={this.props.setCity} />
    ));
    return [first, second];
  }

  render() {
    const citiesList = this.renderCities();
    return (
      <div className="cities-container">
        <div className="cities-header2">
          <h2 className="cities-header3">We're building our communities here</h2>
          <h3>Sign up for Let's Code today!</h3>
        </div>
        <div className="cities-list">
          <div className="inner-list">{citiesList[0]}</div>
          <div className="inner-list">{citiesList[1]}</div>
        </div>
        <div className="cities-header1">
          <h2>Set your home city</h2>
          <h3>Make sure you're the first to hear about Let's Code updates relevant to you!</h3>
        </div>
      </div>
    )
  }
}

export default Cities;
