import React from 'react';
import { Link } from 'react-router-dom';

import CitiesItem from './cities_item';

class Cities extends React.Component {
  constructor(props) {
    super(props)
  this.renderCities = this.renderCities.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCities();
    // console.log(this.state);
    // console.log(this.props);
  }

  renderCities () {
    const { cities } = this.props
    return cities.map ( city => (
      <div>
        <CitiesItem key={city.id} city={city} currentUser={this.props.currentUser} setCity={this.props.setCity} />
      </div>
    ))
    // Object.keys(cities).map((city) => {(
    //     <CitiesItem key={city.id} city={city} />
    //   )}
    // )
  }

  render() {

    return (
      <div className="cities-container">
        <div className="cities-header2">
          <h2 className="cities-header3">We're building our communities here</h2>
          <h3>Sign up for Let's Code today!</h3>
        </div>
        <div className="cities-list">
          {this.renderCities()}
        </div>
        <div className="cities-header1">
          <h1>Set your home city</h1>
          <h3>Make sure you're the first to hear about Let's Code updates relevant to you!</h3>
        </div>
      </div>
    )
  }
}

export default Cities;
