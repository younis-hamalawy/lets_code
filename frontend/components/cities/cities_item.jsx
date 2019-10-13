import React from 'react';
import { Link } from 'react-router-dom';

class CitiesItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setCityButton = this.setCityButton.bind(this);
  }

  setCityButton() {
    if (this.props.currentUser) {
      if (this.props.currentUser.city_id === this.props.city.id) {
        return (<p className="p1">Home City</p>);
      }
      return (
        <a className="button-link" href="#" onClick={this.handleClick}>set as home city</a>
      );
    }
  }

  handleClick(e) {
    e.preventDefault();
    const newUser = Object.assign({}, this.props.currentUser);
    newUser.city_id = this.props.city.id;
    this.props.setCity(this.props.currentUser.id, newUser);
  }
  render() {
    return (
      <div className="city-container">
        <div key={this.props.city.id} className={this.props.city.city_abrv}>
          <div className="transbox">
            <Link to={`/cities/${this.props.city.id}`}><p className="img-text">{this.props.city.name}</p></Link>
          </div>
        </div>
        {this.setCityButton()}

      </div>
    );
  }
}


export default CitiesItem;
