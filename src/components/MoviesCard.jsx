
import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from './StarRating'

const MoviesCard = ({movie}) => {
    return (
        <div  className="movie-carde">
            <StarRating rating={movie.rating} />
           <img src={movie.image} alt=""/>
           <h3> {movie.name }</h3>
           <p>{movie.date}</p>
           <Link to={`/movie/${movie.id}`}>

                <button className="btn2">details </button>
            </Link>
        </div>
    )
}

export default MoviesCard

