import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {info} from '../../data/dataStore';
import PropTypes from 'prop-types';

const Info = () => (
  <Container>
    <Hero titleText={info.title} imagePic={info.image}/>
    {info.description}
  </Container>
);

Info.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default Info;