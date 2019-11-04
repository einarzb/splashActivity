import React, { Component } from 'react';
import MovieTile from '../components/MovieTile.js';
import {movies} from '../assets/index';
import styled from 'styled-components';



class MovieListScreen extends React.Component{ 

  constructor(){
    super()
    this.state = {
      moviesArr:movies,
    }
   }

  render (){    
    let {moviesArr} = this.state;
    return(
        <Wrapper>

          <h2>Netflix 90's Edition</h2>
          <MovieTile moviesArr={moviesArr}></MovieTile>

        </Wrapper>
      )
  }
}

export default MovieListScreen;

const Wrapper = styled.div`
  display:block;
  background-color: #000000;
  margin: 0px auto;
  width: 80%;
  & h2 {
    color: red;
    font-weight: bold;
    margin: 0;
    padding-top: 1rem;
  }
`;