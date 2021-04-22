import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { NationContainer } from './components/NationContainer';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact>
              <Banner/>
            </Route>
            <Route path='/grafici'>
              <NationContainer/>
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </>
  )
}

export default App;