import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';


class DashboardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  formatDay() {
    let date = new Date(this.props.event.date)
      let day = date.getDay();
      if (day === 6){
        day = 0;
      }else{
        day++;
      }
      switch (day) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
      }
  }

  formatMonth() {
    let date = new Date(this.props.event.date)
      let month = date.getMonth();
      switch (month) {
        case 0:
          return "JAN";
        case 1:
          return "FEB";
        case 2:
          return "MAR";
        case 3:
          return "APR";
        case 4:
          return "MAY";
        case 5:
          return "JUN";
        case 6:
          return "JUL";
        case 7:
          return "AUG";
        case 8:
          return "SEPT";
        case 9:
          return "OCT";
        case 10:
          return "NOV";
        case 11:
          return "DEC";
      }
  }

  dayNumber(){
    return (this.props.event.date.slice(this.props.event.date.length - 2))
  }

  render () {
    return (
      <div key={this.props.event.id} className="city-event-item-container">
        <div className="event-details">
          <div className="event-detail">
            <p className="event-city-name">{this.props.event.name}</p>
            <p className="event-day">{this.formatDay()}</p>
            <div className="day">
              <p className="event-month">{this.formatMonth()}&nbsp;&nbsp;</p>
              <p className="event-daynumber">{this.dayNumber()}</p>
            </div>
          </div>
          <div className="box-footer1">
            <div className="box-footer">
              <p className="event-description">{this.props.event.description}</p>
              <p className="event-address">{this.props.event.address}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default DashboardItem;
