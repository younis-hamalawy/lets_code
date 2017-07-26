import { connect } from 'react-redux';
// import lodash from 'lodash';

import { fetchAllCities } from '../../actions/cities_actions';
import Cities from './cities';
import { selectAllCities } from '../../reducers/selectors';

import { setCity } from '../../actions/users_actions';

const mapStateToProps = ( state ) => {
  // console.log(state.cities);
  return {
  currentUser: state.session.currentUser,
  cities: selectAllCities(state.cities)
  };
}

const mapDispatchToProps = dispatch => ({
  fetchAllCities: () => dispatch(fetchAllCities()),
  setCity: (cityId, user) => dispatch(setCity(cityId, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
