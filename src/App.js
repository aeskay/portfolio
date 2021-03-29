import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import './viewports.css';
import './loaders.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './Container';
import ErrorPage from './components/ErrorPage';
import Details from './components/Details';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container}/>
        <Route path="/portfolio/:item_id" component={Details}/>
        <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
