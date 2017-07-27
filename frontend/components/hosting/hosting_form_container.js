import { connect } from 'react-redux';

import { createEvent, clearErrors } from '../../actions/events_actions';
import HostingForm from './hosting_form';
import { selectAllCities } from '../../reducers/selectors';
import { fetchAllCities } from '../../actions/cities_actions';
import { setCity } from '../../actions/users_actions';

const mapStateToProps = (state) => {
  return {
    events: state.events,
    currentUser: state.session.currentUser,
    errors: state.events.errors,
    cities: selectAllCities(state.cities)

  }
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors()),
  fetchAllCities: () => dispatch(fetchAllCities()),
  setCity: (cityId, user) => dispatch(setCity(cityId, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingForm);
