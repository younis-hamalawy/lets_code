import { connect } from 'react-redux';

import { createEvent, clearErrors } from '../../actions/events_actions';
import HostingForm from './hosting_form';


const mapStateToProps = (state) => {
  return {
    events: state.events,
    currentUser: state.session.currentUser,
    errors: state.events.errors
  }
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingForm);
