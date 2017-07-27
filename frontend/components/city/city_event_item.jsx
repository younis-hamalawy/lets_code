import React from 'react';
import { Link } from 'react-router-dom';
// import merge from 'lodash/merge';

class CityEventItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this);
    this.handleDeregister = this.handleDeregister.bind(this);
    this.registerEventButton = this.registerEventButton.bind(this);
    }

    handleRegister(e) {
      e.preventDefault();

      this.props.registerEvent(this.props.event.id, this.props.currentUser.id)
    }

    handleDeregister(e) {
      e.preventDefault();

      this.props.deregisterEvent(this.props.event.id, this.props.currentUser.id)
    }

    registerEventButton() {
      if (this.props.currentUser){
        if (this.props.event.host_id === this.props.currentUser.id){
          return (
            <button className="sign-button" disabled>You are the host!</button>
          )
        }
        if (this.props.event.attending === true){
          return (
            <button className="sign-button" onClick={this.handleDeregister}>Leave Event</button>
          )
        }

        return (
          <button className="sign-button" onClick={this.handleRegister}>Join Event</button>
        )
      }
    }

    formatDay() {
      let date = new Date(this.props.event.date)
        let day = date.getDay();
        if (day === 6){
          day = 0;
        }else{
          day++;
        }
        // let month = date.getMonth();
        switch (day) {
          case 0:
            return "Sunday";
          case 1:
            return "Monday"
          case 2:
            return "Tuesday"
          case 3:
            return "Wednesday"
          case 4:
            return "Thursday"
          case 5:
            return "Friday"
          case 6:
            return "Saturday"
        }
    }

    formatMonth() {
      let date = new Date(this.props.event.date)
        let month = date.getMonth();
        switch (month) {
          case 0:
            return "JAN";
          case 1:
            return "FEB"
          case 2:
            return "MAR"
          case 3:
            return "APR"
          case 4:
            return "MAY"
          case 5:
            return "JUN"
          case 6:
            return "JUL"
          case 7:
            return "AUG"
          case 8:
            return "SEPT"
          case 9:
            return "OCT"
          case 10:
            return "NOV"
          case 11:
            return "DEC"
        }
    }

    dayNumber(){
      return (this.props.event.date.slice(this.props.event.date.length - 2))
    }

    render () {
      // console.log(this.props);
      return (
        <div key={this.props.event.id} className="city-event-item-container">
          <p className="event-city-name">{this.props.event.name}</p>
          <p className="event-day">{this.formatDay()}</p>
          <p className="event-month">{this.formatMonth()}</p>
          <p className="event-daynumber">{this.dayNumber()}</p>
          <p className="event-description">{this.props.event.description}</p>
          <p className="event-address">{this.props.event.address}</p>
          {this.registerEventButton()}
        </div>
      );
  }
}


export default CityEventItem;
