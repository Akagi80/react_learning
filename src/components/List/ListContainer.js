import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';

// ZMIANY - POBIERANIE DANYCH ZE STANU PLINKACJI!!!!
/*
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});
*/

const mapStateToProps = (state, props) => {
  const id = props.match.params.id; // 1. Dla wygody dodajemy stałą "id" i wykorzystajmy ją od razu jako atrybut funkcji getColumnsForList
  // "props.match" zawiera informacje przekazywane przez Route, zawierające m.in. adres strony i parametry w nim zawarte – takie jak :id

  const filteredLists = state.lists.filter(list => list.id == id); // 2. Filtrujemy stan aplikacji
  const listParams = filteredLists[0] || {}; // 3. Przefiltrowana lista zwraca jeden element - obiekt zawirający włąściwośi listy. Natępnie dodajemy ""lub użyj pustej tablicy" - "|| {}" na wypadek gdyby w stanie aplikacji nie było listy o podanym id
  return {
    ...listParams, // 4. rozpakowujemy zawartość listParams do zwracanego obiektu, aby właściwości takie jak title czy description zostały przekazane do komponentu List jako propsy
    columns: getColumnsForList(state, id),
  };
};
/*
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});
*/

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id, // zamieniamy props.id na props.match.params.id
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
