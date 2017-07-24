import React from 'react';
import { Link } from 'react-router-dom';
// import merge from 'lodash/merge';

class CityEventItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.setCityButton = this.setCityButton.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      let newUser = Object.assign({}, {user: this.props.currentUser});
      // console.log(newUser);
      newUser["city_id"] = this.props.city.id;
      // console.log(newUser);

      this.props.setCity(this.props.currentUser.id, newUser)
    }

    setCityButton() {
      if (this.props.currentUser){
        return (
          <button className="sign-button" onClick={this.handleClick}>Set Home City</button>
        )
      }
    }

    render () {

      return (
        <div key={this.props.city.id} className="city-item-container">
          <Link to={`/cities/${this.props.city.id}`}><img className="city-image" src={this.props.city.image_url} alt={this.props.city.name}/></Link>
          {this.setCityButton()}
        </div>
      )
  }
}


export default CityEventItem;
