import React, { useState, } from "react";
import NavBar from "./components/NavBar";

import SearchField from "react-search-field";

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Inbox';
import Reports from './pages/Favourites';
import Products from './pages/Important';


function App() {
  return (
    
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
      
  )
}

export default App;