import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

class Search extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK(){
    this.props.history.push(`/search/${this.state.value}`);
  }

  render() {
    const {value} = this.state;
    const {icon} = settings.search;
    return (
      <Container>
        <div className={styles.component}>
          <input
            type='text'
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Search);
