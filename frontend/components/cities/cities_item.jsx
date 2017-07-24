import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class CitiesItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      let newUser = Object.assign({}, {user: this.props.currentUser});
      console.log(newUser);
      newUser["city_id"] = this.props.city.id;
      console.log(newUser);

      this.props.setCity(this.props.currentUser.id, newUser)
    }
    render () {
      console.log("PROPS", this.props);
      return (
        <div key={this.props.city.id} className="city-item-container">
          <Link to={`/cities/${this.props.city.id}`}><img className="city-image" src={this.props.city.image_url} alt={this.props.city.name}/></Link>
          <button className="sign-button" onClick={this.handleClick}>Set Home City</button>
        </div>
      )
  }
}


export default CitiesItem;
