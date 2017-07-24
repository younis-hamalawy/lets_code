import React from 'react';
import { Link } from 'react-router-dom';
// import merge from 'lodash/merge';

class CityEventItem extends React.Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this);
    // this.registerEventButton = this.registerEventButton.bind(this);
    }

    // handleClick(e) {
    //   e.preventDefault();
    //
    //   this.props.registerEvent(this.props.event.id, this.props.currentUser.id)
    // }
    //
    // registerEventButton() {
    //   if (this.props.currentUser){
    //     return (
    //       <button className="sign-button" onClick={this.handleClick}>Join Event</button>
    //     )
    //   }
    // }

    render () {

      return (
        <div key={this.props.event.id} className="city-event-item-container">
          <p className="event-city-name">{this.props.event.name}</p>
          <p className="event-date">{this.props.event.date}</p>
          <p className="event-description">{this.props.event.description}</p>
          <p className="event-address">{this.props.event.address}</p>

        </div>
      )
  }
}


export default CityEventItem;
