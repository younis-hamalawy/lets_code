import React from 'react';
import { Link } from 'react-router-dom';
// import merge from 'lodash/merge';

class CityEventItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.registerEventButton = this.registerEventButton.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      // let newRegistration = Object.assign({}, {user_id: this.props.currentUser.id, event_id: this.props.event.id});
      // console.log(newUser);
      // console.log(newUser);

      this.props.registerEvent(this.props.event.id, this.props.currentUser.id)
    }

    registerEventButton() {
      if (this.props.currentUser){
        return (
          <button className="sign-button" onClick={this.handleClick}>Set Home City</button>
        )
      }
    }

    render () {

      return (
        <div key={this.props.event.id} className="city-event-item-container">
          event.name
          event.date
          event.description
          event.address
          {this.registerEventButton()}
        </div>
      )
  }
}


export default CityEventItem;
