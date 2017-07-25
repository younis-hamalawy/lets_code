import React from 'react';
import { Link } from 'react-router-dom';
// import merge from 'lodash/merge';

class CitiesItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.setCityButton = this.setCityButton.bind(this);
    }

    handleClick(e) {
      e.preventDefault();
      let newUser = Object.assign({}, this.props.currentUser);
      // console.log(newUser);
      newUser["city_id"] = this.props.city.id;
      // console.log(newUser);

      this.props.setCity(this.props.currentUser.id, newUser)
    }

    setCityButton() {
      if (this.props.currentUser){
        return (
          <a className="button-link" href="#" onClick={this.handleClick}>set as home city</a>
        )
      }
    }

    render () {
      return (
      <div className="city-container">
        <div key={this.props.city.id} className={this.props.city.city_abrv}>

          <Link to={`/cities/${this.props.city.id}`}><p className="img-text">{this.props.city.name}</p></Link>

        </div>
        {this.setCityButton()}

      </div>
      )
  }
}


export default CitiesItem;
