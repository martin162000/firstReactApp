import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import  {ListMovies}  from '../../types/types';

interface Props {
    movie: ListMovies
    
}

const Movie = (props: Props) => {

    const dispatch = useDispatch();

    const {movie} = props

    const handleClick = () => {
      dispatch({
        type: "SELECTED_MOVIE",
        playload: movie.linkApi
    });

    }

    return (
        <article className="movie zoomfadein" onClick={handleClick}>
            <Link to={`/details/${movie.linkApi}`}>
            <div className="inside">
                <h2>{movie.title}</h2>
                <div className="imgMovie">
                    <img src={movie.poster} alt="movie art" />
                </div>
            </div>
            <footer className="meta">{movie.type + ' - ' + movie.year}</footer>
            </Link>
        </article>
    )
}

export default Movie
