import { connect } from 'react-redux';

import { signin, signout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { fetchAllCities } from '../../actions/cities_actions';
import { fetchAllEvents } from '../../actions/events_actions';



const mapStateToProps = ({ session }) => {
  return {
    signedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signin : signup;
  return {
    fetchAllEvents: () =>dispatch(fetchAllEvents()),
    fetchAllCities: () => dispatch(fetchAllCities()),
    signin: user => dispatch(signin(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
