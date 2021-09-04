import React from 'react';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

import styles from './List.scss';

import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Container from '../Container/Container';
import Creator from '../Creator/Creator';

// komponent klasowy (złożony)
class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    //destrukturyzacja propsów title, iamge, description
    const {title, image, description, columns, addColumn} = this.props;

    return (
      <Container>
        <section className={styles.component}>
          <Hero 
            titleText={title} 
            imagePic={image}
          />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      </Container>
    );
  }
}

export default List;