import React from 'react'
import { useNavigate } from 'react-router';

const MovieItem = (props) => {

  const router = useNavigate();

  const checkRating = () => {
    if (props.rating <= 10 && props.rating >= 7) return `green`;
    if (props.rating < 7 && props.rating >= 5) return `orange`;
    else return `red`;
  }

  return (
    <div className="movie__item">
          <div className="movie__cover-img" onClick={() => router(`/movies/${props.movieId}`)}>
            <img src={props.src_img} alt="" className='movie__cover' />
            <div className="movie__cover-hover"></div>
          </div>
          <div className="movie__info">
            <div className="movie__title">{props.title}</div>
            <div className="movie__year-genre">
              <div className="movie__year">{props.year}</div>
              <div className="movie__category">
                {props.genres.map((genre, index) => (
                  <span key={index}>{genre.genre} </span>
                ))}
              </div>
              
              
            </div>
            {props.rating && props.rating.slice(-1) !== "%" &&
            <div className={`movie__average movie__average-${checkRating()}`}>{props.rating}</div>
            }
            
          </div>
        </div>
  )
}

export default MovieItem