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
    const [wasEnter, setWasEnter] = useState(0)


    useEffect(() => {
      if(state !== undefined) {
        let oldArrays = state
        setMovies(oldArrays)
        setWasEnter(1)
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
              setWasEnter(1)
              
                // save objects with REDUX
              dispatch({
                type: "SET_MOVIE",
                playload: filteredArr
              });
           } else {
            setMovies([])
            setWasEnter(1)
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

   const showMovies = (mov:any) => {
     if(mov.length > 0) {
       return <MoviesList movies={mov} />
     } else if (wasEnter === 1) {
       return <div className="searchNotFind"> We can't find movie or tv series with this title. Try another one. </div>
     }
     else {
       return <div className="searchNotFind"> Search for any movie or tv series <em>(for example: batman)</em> <p>and press  <strong>enter</strong></p></div>
     }
   }



    return (
        <article className="movies">
            <h1>Movies</h1>
            <MoviesSearchForm onSearch={handleSearch}/>
            {showMovies(movies)}
        </article>
    )
}

export default Movies
