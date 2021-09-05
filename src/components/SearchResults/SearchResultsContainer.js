import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  return {
    cards: getCardsForSearchResults(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);