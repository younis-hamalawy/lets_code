import { connect } from 'react-redux';
// import lodash from 'lodash';

import { fetchAllCities, fetchSingleCity } from '../../actions/cities_actions';
import City from './city';


const mapStateToProps = ( { city, session } ) => ({
  // cities: lodash.values(state.cities),
  currentUser: session.currentUser,
  city
});

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchSingleCity: (cityId) => dispatch(fetchSingleCity(cityId)),
  registerEvent: (eventId, userId) => dispatch(registerEvent(eventId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
