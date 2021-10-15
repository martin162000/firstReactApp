import React from 'react'

import  {ListMovies}  from '../../types/types'
import Movie from './Movie'





interface Props {

    movies: ListMovies[]
}

const MoviesList = (props: Props) => {


    const {movies} = props

    return (

        <ul className="moviesList">
                {movies.map(movie => (
                    <li key={movie.linkApi}><Movie movie={movie}/></li>
                ))}
        </ul>

    )
}

export default MoviesList
