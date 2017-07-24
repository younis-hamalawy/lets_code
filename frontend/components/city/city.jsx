import React from 'react';
import { Link } from 'react-router-dom';

import CityEventItem from './city_event_item';
// import CitiesItem from './cities_item';

class City extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchSingleCity(this.props.match.params.id);
  }

  renderEvents () {
    const { events } = this.props.city
    console.log(city.events);
    return events.map ( event => (
      <div>
        <CityEventItem key={event.id} event={event} currentUser={this.props.currentUser} registerEvent={this.props.registerEvent} />
      </div>
    ))
    // Object.keys(cities).map((city) => {(
    //     <CitiesItem key={city.id} city={city} />
    //   )}
    // )
  }

  render() {

    return (
      <div className="city-container">
        <img className="city-image" src={this.props.city.image_url} alt={this.props.city.name}/>
        <div className="city-header1">
        </div>
        <div className="city-header2">
          <h3>Tea Time is a conversation between a few people who know nothing about each other.</h3>
          <h4>You'll never leave without questions, new perspectives, and the reminder that we're far more the same than we are different.</h4>
        </div>
        <div className="event">
          {this.renderEvents()}
        </div>
        <div>
          <h4>The Host Community is full of amazing stories.</h4>
          <p>How else would someone end up regularly bringing strangers together for conversations? Before each of them were invited to community, they were attendees that fed their tea times with their questions, open-mindedness, and presence.</p>
        </div>
      </div>
    )
  }
}

export default City;
