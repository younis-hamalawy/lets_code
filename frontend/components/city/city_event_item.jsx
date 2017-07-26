import React from 'react';
import { Link } from 'react-router-dom';
// import merge from 'lodash/merge';

class CityEventItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
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
            <button className="sign-button" disabled>Leave Event!</button>
          )
        }

        // if (this.props.registeredUsers.map ( user => (
        //   user.id
        // )).includes(this.props.currentUser.id) ){
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

    render () {
      // console.log(this.props);
      return (
        <div key={this.props.event.id} className="city-event-item-container">
          <p className="event-city-name">{this.props.event.name}</p>
          <p className="event-date">{this.props.event.date}</p>
          <p className="event-description">{this.props.event.description}</p>
          <p className="event-address">{this.props.event.address}</p>
          {this.registerEventButton()}
        </div>
      );
  }
}


export default CityEventItem;
