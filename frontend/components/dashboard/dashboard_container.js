import { connect } from 'react-redux';

import { fetchAllEvents } from '../../actions/events_actions';
import { selectAllEvents } from '../../reducers/selectors';
import Dashboard from './dashboard';


const mapStateToProps = ( state) => {

  return ({
    currentUser: state.session.currentUser,
    events: selectAllEvents(state.events)
  })
};

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () =>dispatch(fetchAllEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
