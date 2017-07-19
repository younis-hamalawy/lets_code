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
    this.demosignin = this.demosignin.bind(this);
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
        <div className="sign-form">
          <br/>
          <label>
            <input type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="sign-input"
              placeholder="First name"
            />
          </label>
          <br/>
          <label>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              className="sign-input"
              placeholder="Last name"
            />
          </label>
        </div>
			);
		}
	}

  demosignin(e) {
		e.preventDefault();
		const user = {email: "ewa@gmail.com", password: "123456"};
		this.props.signin({user});
	}

  render() {

    return (
      <div className="sign-form-container">
        <form onSubmit={this.handleSubmit} className="sign-form-box">
          Welcome to let's Code!
          <br/>
          {this.renderErrors()}
          {this.signupFields()}
          <div className="sign-form">
            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="sign-input"
                placeholder="Email address"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="sign-input"
                placeholder="password"
              />
            </label>
            <br/>
            <input type="submit" value="Let's Code!" />
            <button type="submit" className="button" onClick={this.demosignin}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
