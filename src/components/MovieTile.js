
import React from 'react';
import styled from 'styled-components';

const MovieTile = ({moviesArr}) => {
  
  let movieComponent = moviesArr.map(function(movie, i) {
    return <Tile key={i} onClick={movie.onClick}>
        <TileBody> 
          <h5> {movie.title} </h5>  
          <img alt="icon" src={movie.image} style={{margin:'3px 5px',width:'100%', height:'auto'}}/>
          <MovieData>
              <RatingBox> Rating: {movie.rating}</RatingBox>
              <span>Release Year: {movie.releaseYear}</span>
              <Tags>{movie.genre.map(function(genre, i){
                return <Tag>{genre}</Tag>
              })}</Tags>
          </MovieData>
        </TileBody>
      </Tile>
  })

  return(
    <NetflixTiles> 
      {movieComponent}
    </NetflixTiles>
  )
}

export default MovieTile;

const Tile = styled.div`
    width: 220px;
    height: auto;
    background-color: #000000;
    color: #ffffff;
    font-size: 15px;
    margin: 1rem auto;
    cursor:pointer;
    border: 1px solid #FFFFFF;
    padding-bottom: 5px;
`;

const NetflixTiles = styled.div`
  flex-direction:row;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

const TileBody = styled.div`
  display:inline-flex;
  flex-direction:column;
  align-items:center;
  & h5 {
    font-size: 17px;
    font-weight: bold;
    line-height: 1.5;
    height: 26px;
  }
`;

const Tags = styled.div`
  display:inline-flex;
  flex-direction:row;
  justify-content:space-between;
  margin: 5px 0;
`;

const Tag = styled.div`
  background-color: rgba(255,255,255,0.3);
  color: white;
  border-radius: 0.5em;
  padding: 3px 4px;
  font-size: 12px;
  margin: 0px 5px;
`;

const RatingBox = styled.div`
  font-weight: bold;
`;

const MovieData = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  width: 90%;
`;