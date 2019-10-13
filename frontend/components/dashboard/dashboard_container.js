import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllEvents } from '../../actions/events_actions';
import { selectHostedEvents, selectJoinedEvents, selectPastEvents } from '../../reducers/selectors';
import Dashboard from './dashboard';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    hostedEvents: selectHostedEvents(state.events.entities, state.session.currentUser),
    joinedEvents: selectJoinedEvents(state.events.entities),
    pastEvents: selectPastEvents(state.events.entities)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: () => dispatch(fetchAllEvents()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard));
