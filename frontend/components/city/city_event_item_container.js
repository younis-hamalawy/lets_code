import { connect } from 'react-redux';
// import lodash from 'lodash';

import CityEventItem from './city_event_item';

import { selectAllRegisteredUsers } from '../../reducers/selectors'


const mapStateToProps = ( state , ownProps ) => {
  return {
    currentUser: state.session.currentUser,
    registeredUsers: selectAllRegisteredUsers(state.city, ownProps.event.id)
  };
};

const mapDispatchToProps = dispatch => ({
  registerEvent: (eventId, userId) => dispatch(registerEvent(eventId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityEventItem);
