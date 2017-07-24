import { connect } from 'react-redux';
// import lodash from 'lodash';

import { fetchAllCities, fetchSingleCity } from '../../actions/cities_actions';
import Cities from './cities';
import { selectAllCities } from '../../reducers/selectors'

import { setCity } from '../../actions/user_actions';

const mapStateToProps = ( state ) => {
  console.log(selectAllCities(state));
  return {
  // cities: lodash.values(state.cities),
  currentUser: state.session.currentUser,
  cities: selectAllCities(state)
  };
}

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  fetchSingleCity: (cityId) => dispatch(fetchSingleCity(cityId)),
  setCity: (id, user) => dispatch(setCity(id, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
