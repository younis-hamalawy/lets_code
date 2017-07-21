import React from 'react';
import { Link } from 'react-router-dom';

import CitiesItem from './cities_item';

class Cities extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllCities();
  }

  render() {
    const { cities } = this.props
    return (
      <div className="cities-container">
        <div className="cities-header1">
          <h1>Set your home city</h1>
          <h3>Make sure you're the first to hear about Let's Code updates relevant to you!</h3>
        </div>
        <div className="cities-header2">
          <h2 className="cities-header3">We're building our communities here</h2>
          <h3>Sign up for Let's Code today!</h3>
        </div>
        <div className="cities-list">
          {Object.keys(cities).map((city) => {(
              <CitiesItem key={city.id} city={city} />
            )}
          )}
        </div>
      </div>
    )
  }
}

export default Cities;
