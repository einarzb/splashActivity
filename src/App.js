import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from './screens/MovieList'

class App extends Component {
  render(){
      return (
          <div style={{backgroundColor: '#000000'}} className="App">
            <MovieList/>          
          </div>
      );
  }
}

export default App;
