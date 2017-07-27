import { connect } from 'react-redux';


import { fetchAllCities, fetchSingleCity } from '../../actions/cities_actions';
import { fetchAllEvents } from '../../actions/events_actions';

import City from './city';

import { selectAllEvents } from '../../reducers/selectors'
import { selectAllCities } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps) => {

  const currentCityId = parseInt(ownProps.location.pathname.slice(8));

  return ({
    cities: state.cities,
    currentCityId: currentCityId,
    currentUser: state.session.currentUser,
    events: selectAllEvents(state.events)

  })
};

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () =>dispatch(fetchAllEvents()),
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchSingleCity: (cityId) => dispatch(fetchSingleCity(cityId)),
  registerEvent: (eventId, userId) => dispatch(registerEvent(eventId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
