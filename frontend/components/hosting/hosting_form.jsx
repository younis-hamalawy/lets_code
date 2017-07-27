import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { values } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      date: "",
      name: "",
      address: "",
      description: "",
      host_id: this.props.currentUser.id,
      city_id: this.props.currentUser.city_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.signedin) {
      this.props.history.push('/');
    }
  }

  componentWillMount() {
    this.props.fetchAllCities();
  }

  update(field) {
    console.log(field);
    return e => {
      this.setState({ [field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    console.log(this.props.currentUser);
    e.preventDefault();
    if (this.props.currentUser.city_id === null){
      let newUser = Object.assign({}, this.state.currentUser);
      newUser["city_id"] = this.state.city_id;
      this.props.setCity(this.props.currentUser.id, newUser)
    }
    const event = this.state;
    this.props.createEvent(event).then( () => this.props.history.push(`/cities/${this.state.city_id}`));
  }




  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  pickCity() {
    let citiesarray = values(this.props.cities);
    if (this.props.currentUser.city_id === null){
      return(
        <div className="pick-city">
          <select name="city" onChange={this.update('city_id')}>
            <option value="" disabled selected>Set default city</option>
            {
              citiesarray.map( (el) => {
                console.log(typeof(el.name));
                return (<option
                  key={el.id}
                  value={el.id}
                  >{el.name}</option>
                );
              })
            }
          </select>
        </div>
      )
    }
  }

  render() {

    return (

      <div className="create-event-form-container">
        <form onSubmit={this.handleSubmit} className="create-event-form-box">
          <h2>JOIN THE HOST COMMUNITY</h2>
          <p className="create-event-text">Learn to code at your own pace by bringing strangers together for a great programming experience</p>
          <br/>
          <div className="create-event-form">
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="create-event-box"
              placeholder="Name"
              />
            <input type="date"
              value={this.state.date}
              onChange={this.update('date')}
              className="create-event-box"
              placeholder="Date"
              />
            <input type="text"
              value={this.state.address}
              onChange={this.update('address')}
              className="create-event-box"
              placeholder="Address"
              />
            <input type="text"
              value={this.state.description}
              onChange={this.update('description')}
              className="create-event-box"
              placeholder="Description"
              />
            {this.pickCity()}
            <br/>
            <div className="errors">{this.renderErrors()}</div>
            <input className='host-submit' type="submit" value="HOST THIS EVENT!" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
