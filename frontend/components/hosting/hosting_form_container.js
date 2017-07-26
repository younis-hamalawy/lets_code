import { connect } from 'react-redux';

import { createEvent } from '../../actions/events_actions';
import HostingForm from './hosting_form';


const mapStateToProps = (state) => {
  return {
    events: state.events
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingForm);
