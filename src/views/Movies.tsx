import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


// Components
import MoviesSearchForm from "../components/movies/MoviesSearchForm";
import MoviesList from "../components/movies/MoviesList";

// Types
import  {MoviesFromApi, apiKey}  from '../types/types'



const Movies = () => {

    const [movies, setMovies] = useState([])
    const dispatch = useDispatch();
    const state = useSelector((state:any) => state.allMovies.movies)


    useEffect(() => {
      if(state !== undefined) {
        let oldArrays = state
        setMovies(oldArrays)
      }
    }, [state]);


    // Search movie 
    const handleSearch = (query: string) => {
          axios.get(
            `https://omdbapi.com/?apikey=${apiKey}&s=${encodeURI(query)}`
         ).then(response => {
          if(response.data.Response === "True") {

              // All data to ombMovies
              let ombMovies = response.data.Search.filter((movie: any) => movie.Poster !== "N/A").map((movie: any) => extractData(movie))

              // Filter duplicate data by linkApi
                const seen = new Set();
                const filteredArr = ombMovies.filter((movie: { linkApi: unknown; }) => {
                  const duplicate = seen.has(movie.linkApi);
                  seen.add(movie.linkApi);
                  return !duplicate;
                });
                
              setMovies(filteredArr)
              
                // save objects with REDUX
              dispatch({
                type: "SET_MOVIE",
                playload: filteredArr
              });
           }

         })
        
         
   }

   const extractData = ({
       Title: title,
       Year: year, 
       imdbID : linkApi,
       Type: type,
       Poster: poster
    }: MoviesFromApi) => {
       return {title, year, linkApi, type, poster}
   }



    return (
        <article className="movies">
            <h1>Movies</h1>
            <MoviesSearchForm onSearch={handleSearch}/>
            <MoviesList movies={movies} />
        </article>
    )
}

export default Movies
