import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { DataCarousel } from './components/DataCarousel';
import { ChartContainer } from './components/ChartContainer';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Banner />
            <DataCarousel/>
          </Route>
          <Route path='/grafici'>
            <ChartContainer />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;