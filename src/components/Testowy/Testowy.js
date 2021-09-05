import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

class Testowy extends React.Component {
  render() {
    const {title, content, image} = this.props;

    return (
      <Container>
        <Hero
          titleText={title}
          imagePic={image}
        />
        {content}
      </Container>
    );
  }
}

Testowy.propTypes ={
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default Testowy;