import { connect } from 'react-redux';
import Testowy from './Testowy';

const mapStateToProps = state => ({
  title: state.app.title2,
  content: state.app.content,
  image: state.app.image,
});

export default connect(mapStateToProps)(Testowy);