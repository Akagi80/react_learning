import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  
  render() {
    //destrukturyzacja propsów
    const {title} = this.props;

    return (
      <section className={styles.component}>
        {title}
      </section>  
    );
  }
}

export default Card;