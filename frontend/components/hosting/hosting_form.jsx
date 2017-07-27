import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      address: "",
      description: "",
      host_id: this.props.currentUser.id,
      city_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedin) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.state;
    this.props.createEvent(event).then( () => this.props.history.push(`/cities/${this.props.currentUser.city_id}`));
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
            <br/>
            <input className='host-submit' type="submit" value="HOST THIS EVENT!" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
