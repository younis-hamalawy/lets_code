import { connect } from 'react-redux';


import { fetchAllCities, fetchSingleCity } from '../../actions/cities_actions';
import City from './city';

import { selectAllEvents } from '../../reducers/selectors'
import { selectAllCities } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps) => {

  const currentCityId = parseInt(ownProps.location.pathname.slice(8));

  let cities = selectAllCities(state.cities);
  // console.log(cities);
  const city = cities[currentCityId];
  return ({
    currentCityId: currentCityId,
    currentUser: state.session.currentUser,
    city
    // city: state.cities[state.cities],
    events: selectAllEvents(state.cities[currentCityId])

  })
};

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchSingleCity: (cityId) => dispatch(fetchSingleCity(cityId)),
  registerEvent: (eventId, userId) => dispatch(registerEvent(eventId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
