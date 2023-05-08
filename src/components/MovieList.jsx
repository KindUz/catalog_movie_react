import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movies}) => {
    if (!movies) return (
      <h1>Ничего нет :(</h1>
    ); 
    return (
      <div className="content">
        <div className="content__movies container">
          {movies.films.map(movie => 
            <MovieItem movieId={movie.filmId} src_img={movie.posterUrlPreview} title={movie.nameRu} year={movie.year} rating={movie.rating} genres={movie.genres} key={movie.filmId}/>
          )}
        </div>
      </div>
    );
  };

export default MovieList