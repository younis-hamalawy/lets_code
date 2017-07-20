import { connect } from 'react-redux';


import Footer from './footer';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

// const mapDispatchToProps = dispatch => ({
//   signout: () => dispatch(signout())
// });

export default connect(
  mapStateToProps,
  null
)(Footer);
