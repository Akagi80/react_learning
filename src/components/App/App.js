import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../Faq/FAQ';
import List from '../List/ListContainer';
import Testowy from '../Testowy/TestowyContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import SearchResults from '../SearchResults/SearchResultsContainer';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:id' component={SearchResults} />
        <Route exact path='/testowy' component={Testowy} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;