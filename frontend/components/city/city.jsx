import React from 'react';
import { Link } from 'react-router-dom';

import CityEventItemContainer from './city_event_item_container';
// import CitiesItem from './cities_item';

class City extends React.Component {
  constructor(props) {
    super(props)
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleCity(this.props.match.params.id);
  }

  renderEvents () {
    const { events } = this.props
    return events.map ( event => (
      <div>
        <CityEventItemContainer key={event.id} event={event}/>
      </div>
    ))
  }

  render() {

    return (
      <div className="city-container">
        <div key={this.props.city.id} className={this.props.city.city_abrv}>
          <p className="img-text">{this.props.city.name}</p>
        </div>
        <div className="city-header1">
        </div>
        <div className="city-header2">
          <h3>Code Time is a conversation between a few people who know nothing about each other.</h3>
          <h4>You'll never leave without questions, new perspectives, and the reminder that we understand something better each time we explain it to someone else.</h4>
        </div>
        <div className="event">
          {this.renderEvents()}
        </div>
        <div>
          <h4>The Host Community is full of amazing stories.</h4>
          <p>How else would someone end up regularly bringing strangers together for Code Time? Before each of them were invited to community, they were attendees that fed their Code Times with their questions, open-mindedness, and presence.</p>
        </div>

      </div>
    )
  }
}

export default City;
