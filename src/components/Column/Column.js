import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  //stan początkowy
  state = {
    cards: this.props.cards || [],  
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
          {this.props.title}
        </h3>
        <div>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>  
    )
  }
}

export default Column; 