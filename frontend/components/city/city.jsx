import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
import CityEventItemContainer from './city_event_item_container';
import { isEmpty } from 'lodash';
// import CitiesItem from './cities_item';

class City extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    // console.log(this.props.currentCityId);
    this.renderEvents = this.renderEvents.bind(this);
    // const cities = values(this.props.cities);
    // this.city = cities[this.props.currentCityId]
    // console.log("xxxx",this.city);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     this.props.fetchCity(this.props.match.params.id)
  //   }
  // }


  componentWillMount() {
    this.props.fetchAllCities();
    this.props.fetchAllEvents();
    this.props.fetchSingleCity(this.props.match.params.id);

  }
  // componentWillUnmount() {
  //   this.props.fetchAllCities();
  //   this.props.fetchSingleCity(this.props.match.params.id);
  //
  // }

  renderEvents () {

    let { events } = this.props
    // console.log(events);
    events = events.filter( event => event.city_id === this.props.currentCityId);
    // console.log(events);
    return events.map ( event => (

        <CityEventItemContainer key={event.id} event={event}/>

    ))
  }

  render() {
    // console.log(this.props);
    // if (isEmpty(this.props.cities)) {
    //   return <div>Loading...</div>;
    // }
    const city = this.props.cities[this.props.currentCityId] || "";
    return (
      <div className="big-city-container">
        <div key={this.props.currentCityId} className={city.city_abrv}>
          <div className="transbox">
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
