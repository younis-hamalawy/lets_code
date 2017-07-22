import React from 'react';
import { Link } from 'react-router-dom';

// import CitiesItem from './cities_item';

class City extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchSingleCity(this.props.match.params.cityId);
  }

  render() {
    const { city } = this.props
    return (
      <div className="city-container">
        <div className="city-header1">
        </div>
        <div className="city-header2">
          HELLO!
        </div>
        <div className="city-list">

        </div>
      </div>
    )
  }
}

export default City;
