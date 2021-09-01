import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './Hero.scss';

// komponent funkcyjny (prosty)
const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imagePic}></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imagePic: PropTypes.string,
};
  
export default Hero;