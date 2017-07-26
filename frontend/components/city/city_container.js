import { connect } from 'react-redux';


import { fetchAllCities, fetchSingleCity } from '../../actions/cities_actions';
import { fetchAllEvents } from '../../actions/events_actions';

import City from './city';

import { selectAllEvents } from '../../reducers/selectors'
import { selectAllCities } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps) => {

  const currentCityId = parseInt(ownProps.location.pathname.slice(8));

  // const cities = selectAllCities(state.cities);
  // console.log(state.cities);
  // console.log(cities);
  // const city = cities[currentCityId-1];
  return ({
    cities: state.cities,
    currentCityId: currentCityId,
    currentUser: state.session.currentUser,
    // city: city,
    // city: state.cities[state.cities],
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
