import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { DataCarousel } from './components/DataCarousel';
import { ChartContainer } from './components/chart/ChartContainer';
import { Map } from './components/map/Map';
import { Content } from './components/Content';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Banner />
            <DataCarousel />
            <Content />
          </Route>
          <Route path='/grafici'>
            <ChartContainer />
          </Route>
          <Route path='/mappa'>
            <Map />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;