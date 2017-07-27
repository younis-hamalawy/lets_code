import { connect } from 'react-redux';
import Splash from './splash';

export const mapStateToProps = ({ session }) => ({
  session
})

export default connect(
  mapStateToProps,
  null
)(Splash)
