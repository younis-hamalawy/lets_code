import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signupFields = this.signupFields.bind(this);
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
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/signin">sign in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signupFields() {
		if (this.props.formType === "signup") {
			return (
        <div className="sign-form-container">
          <br/>
          <label>First Name:
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="sign-input"
            />
          </label>
          <br/>
          <label>Last Name:
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="sign-input"
            />
          </label>
        </div>
			);
		}
	}

  render() {

    return (
      <div className="sign-form-container">
        <form onSubmit={this.handleSubmit} className="sign-form-box">
          Welcome to let's Code!
          <br/>
          {this.signupFields()}
          {this.renderErrors()}
          <div className="sign-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="sign-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="sign-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
