import React from 'react';
import { Link } from 'react-router-dom';

import CityEventItemContainer from './city_event_item_container';
// import CitiesItem from './cities_item';

class City extends React.Component {
  constructor(props) {
    super(props)
    // console.log(this.props.city);
    // console.log(this.props.currentCityId);
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleCity(this.props.match.params.id);

  }

  renderEvents () {
    const { events } = this.props
    console.log(events);
    return events.map ( event => (
      <div>
        <CityEventItemContainer key={event.id} event={event}/>
      </div>
    ))
  }

  render() {

    return (
      <div className="big-city-container">
        <div key={this.props.city.id} className={this.props.city.city_abrv}>
          <div className="transbox">
            <div className="city-text">
              <div className="img-text5"><p className="img-text2">{this.props.city.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
              <div className="img-text4"><p className="img-text3">&nbsp;&nbsp;&nbsp;Let's Code together!</p>
              </div>
              </div>
          </div>
        </div>

        <div className="city-header1">
          <h3>Code Time is a programming experience between a few people who know nothing about each other.</h3>
          <p>You'll never leave without questions, new perspectives, and the reminder that we understand something better each time we explain it to someone else.</p>
        </div>
        <div className="event">
          {this.renderEvents()}
        </div>
        <div className="city-header2">
          <h3>The Host Community is full of amazing stories.</h3>
          <p>How else would someone end up regularly bringing strangers together for Code Time? Before each of them were invited to community, they were attendees that fed their Code Times with their questions, open-mindedness, and presence.</p>
        </div>

      </div>
    )
  }
}

export default City;
