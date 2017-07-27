import React, { Component } from 'react';
import { Link } from 'react-router';
import { values } from 'lodash';
// import ProfileItem from './profile_item';
// import CurrentProfileItem from './current_profile_item';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllEvents();
  }

  showEvents() {
    const pastEvents = [];
    const joinedEvents = [];
    const hostedEvents = [];
    const allEvents = this.props.events;

    for (var i = 0; i < allEvents.length; i++) {
      if (allEvents[i].attending) {
        joinedEvents.push(allEvents[i]);
      }else if (allEvents[i].host_id == this.props.currentUser.id) {
        hostedEvents.push(allEvents[i]);
      }
    }
    if (allEvents.length === 0) {
      return (
        <div>
          <h4 className="dashboard-header-1">
            You have no tea times coming up! Let's change that.
          </h4>

          <div className="row">
            <Link to={`/cities/${this.props.currentUser.city_id}`} className="glyphicon glyphicon-plus">
              Join a tea time
            </Link>
          </div>

        </div>
      );
    } else {
      let events = lodash.values(this.props.currentUser.events);
      return (
        <div>
          <h4 className="dashboard-header-1">
            Events you're hosting:
          </h4>

          <div className="dashboard-outer">
            <ul className="dashboard-ul">
              <div className="dashboard-hosted-events">
                {
                  events.map((event, i) => (
                    <DashboardItem
                      key={i}
                      event={event}
                      description={event.description}
                      date={event.date} />
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
                  joinedEvents.map((event, i) => (
                    <CurrentDashboardItem
                      key={i}
                      currentEvent={event}
                      currentDescription={event.description}
                      currentDate={event.date} />
                  ))
                }
              </div>
            </ul>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-md-2 col-md-offset-1">
            <h4 className="dashboard-header-1">Welcome home, {this.props.currentUser.firstname}!</h4>
            <h5 className="dashboard-header-2">What are you grateful for today?</h5>
          </div>

          <div className="col-md-9 events-dashboard">
            {this.showEvents()}
          </div>
        </div>

        </div>
    );
  }
}

export default Dashboard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { values } from 'lodash';
//
// class Dashoard extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props);
//     this.renderEvents = this.renderEvents.bind(this);
//   }
//
//   componentWillMount() {
//     this.props.fetchAllCities();
//     this.props.fetchAllEvents();
//     this.props.fetchSingleCity(this.props.match.params.id);
//   }
//
//   renderEvents () {
//     let { events } = this.props
//     events = events.filter( event => event.city_id === this.props.currentCityId);
//     return events.map ( event => (
//       <CityEventItemContainer key={event.id} event={event}/>
//     ))
//   }
//
//   render() {
//     const city = this.props.cities[this.props.currentCityId] || "";
//     return (
//       <div className="big-city-container">
//         <div key={this.props.currentCityId} className={city.city_abrv}>
//           <div className="transbox">
//             <div className="city-text">
//               <div className="img-text5"><p className="img-text2">{city.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
//               <div className="img-text4"><p className="img-text3">&nbsp;&nbsp;&nbsp;Let's Code together!</p>
//               </div>
//               </div>
//           </div>
//         </div>
//
//         <div className="city-header1">
//           <h3>Code Time is a programming experience between a few people who know nothing about each other.</h3>
//           <p>You'll never leave without questions, new perspectives, and the reminder that we understand something better each time we explain it to someone else.</p>
//         </div>
//         <div className="event">
//           {this.renderEvents()}
//         </div>
//         <div className="city-header2">
//           <h3>The Host Community is full of amazing stories.</h3>
//           <p>How else would someone end up regularly bringing strangers together for Code Time? Before each of them were invited to community, they were attendees that fed their Code Times with their questions, open-mindedness, and presence.</p>
//         </div>
//
//       </div>
//     )
//   }
// }
//
// export default Dashboard;
