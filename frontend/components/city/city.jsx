import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
import CityEventItemContainer from './city_event_item_container';

class City extends React.Component {
  constructor(props) {
    super(props)
    this.renderEvents = this.renderEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllCities();
    this.props.fetchAllEvents();
    this.props.fetchSingleCity(this.props.match.params.id);
  }

  renderEvents () {
    let { events } = this.props
    events = events.filter( event => event.city_id === this.props.currentCityId);
    return events.map ( event => (
      <CityEventItemContainer key={event.id} event={event}/>
    ))
  }

  render() {
    const city = this.props.cities[this.props.currentCityId] || "";
    return (
      <div className="big-city-container">
        <div key={this.props.currentCityId} className={city.city_abrv}>
          <div className="transbox2">
            <div className="city-text">
              <div className="img-text5"><p className="img-text2">{city.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
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
