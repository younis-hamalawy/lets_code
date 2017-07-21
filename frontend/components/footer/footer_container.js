import { connect } from 'react-redux';

import Footer from './footer';

const mapStateToProps = ({ session }) => ({
  signedIn: Boolean(session.currentUser)
});

// const mapDispatchToProps = dispatch => ({
//   signout: () => dispatch(signout())
// });

export default connect(
  mapStateToProps,
  null
)(Footer);
