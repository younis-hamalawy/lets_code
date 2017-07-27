import React from 'react';
import { Link } from 'react-router-dom';
import values  from 'lodash/values';
import DashboardItem from './dashboard_item';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.currentUser.city);
  }

  componentWillMount() {
    this.props.fetchAllEvents();
  }

  showEvents() {

    if (this.props.joinedEvents.length === 0 && this.props.hostedEvents.length === 0) {
      return (
        <div>
          <h4 className="dashboard-header-1">
            You have no coding meetups coming up! Let's change that.
          </h4>

          <div className="join">
            { this.props.currentUser.city_id ? <Link className='host-button' to={`/cities/${this.props.currentUser.city_id}`}>Join a coding meet up!</Link> : <Link className='host-button' to={'/cities'}>Join a coding meetup!</Link>}

          </div>

        </div>
      );
    }

    return (
      <div>
        <h4 className="dashboard-header-1">
          Events you're hosting:
        </h4>

        <div className="dashboard-outer">
          <ul className="dashboard-ul">
            <div className="dashboard-hosted-events">
              {
                this.props.hostedEvents.map(event => (
                  <DashboardItem
                    key={event.id}
                    event={event}
                  />
                ))
              }
            </div>
          </ul>
        </div>

        <h4 className="dashboard-header-1">
          Events you've joined:
        </h4>

        <div className="dashboard-outer-current">
          <ul className="dashboard-ul-current">
            <div className="dashboard-current-events">
              {
                this.props.joinedEvents.map(event => (
                  <DashboardItem
                    key={event.id}
                    event={event}
                  />
                ))
              }
            </div>
          </ul>
        </div>
      </div>
    );

  }

  render() {
    return (
      <div>

        <div className="join">
          <div className="join1">
            <h4 className="dashboard-header-1">Welcome home, {this.props.currentUser.first_name}!</h4>
            <h5 className="dashboard-header-2">What are you grateful for today?</h5>
          </div>

          <div className="join2">
            {this.showEvents()}
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
