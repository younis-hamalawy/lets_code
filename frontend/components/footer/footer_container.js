import { connect } from 'react-redux';

import Footer from './footer';

const mapStateToProps = ({ session }) => ({
  signedIn: Boolean(session.currentUser)
});

export default connect(
  mapStateToProps,
  null
)(Footer);
