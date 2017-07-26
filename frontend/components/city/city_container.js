import { connect } from 'react-redux';


import { fetchAllCities, fetchSingleCity } from '../../actions/cities_actions';
import City from './city';

import { selectAllEvents } from '../../reducers/selectors'
import { selectAllCities } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps) => {
  console.log(ownProps);
  const currentCityId = parseInt(ownProps.location.pathname.slice(8));
  console.log(typeof(currentCityId));
  return ({
    cities: selectAllCities(state.cities),
    currentCityId: currentCityId,
    currentUser: state.session.currentUser,
    // city: state.cities[state.cities],
    // events: selectAllEvents(state.cities[this.props.match.params.])

  })
};

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  // fetchSingleCity: (cityId) => dispatch(fetchSingleCity(cityId)),
  registerEvent: (eventId, userId) => dispatch(registerEvent(eventId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
