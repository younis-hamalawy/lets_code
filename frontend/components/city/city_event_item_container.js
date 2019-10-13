import { connect } from 'react-redux';

import CityEventItem from './city_event_item';
import { registerEvent, deregisterEvent } from '../../actions/events_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  registerEvent: (eventId, userId) => dispatch(registerEvent(eventId, userId)),
  deregisterEvent: (eventId, userId) => dispatch(deregisterEvent(eventId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityEventItem);
