import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import  {apiKey}  from '../types/types'


const Details = () => {

    const state = useSelector((state:any) => state)
    const dispatch = useDispatch();
    const { movieId } = useParams<{ movieId: string }>();
    const [movieDetails, setMovieDetails] = useState(
        {
            Title: "",
            Released: "released", 
            Runtime : "runtime",
            Genre: "genre",
            Director: "director",
            Writer: "writer",
            Actors: "actors",
            Country: "country",
            Plot: "plot",
            imdbRating: "rating",
            Poster: "poster",
            imdbID : "link",
         })



      useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `https://omdbapi.com/?apikey=${apiKey}&i=${encodeURI(movieId)}`
          );

            let movieDetail = result.data
           // console.log(result.data)
            setMovieDetails(movieDetail) 
        };
     
        fetchData();
      }, [movieId]);




      const handleClickDetail = () => {
        let detail: string = state.allMovies.detail
        const objMovies:[] = state.allMovies.movies;
        const result = objMovies.find( ({ linkApi }) => linkApi === detail );

        // Duplicite cant add
        if(state.allMovies.favorites !== undefined && state.allMovies.favorites.find( ({ linkApi }:any) => linkApi === detail )) {
        }else if(state.allMovies.favorites === undefined){
            dispatch({
                type: "ADD_FAVORITE",
                playload: result
            });

        }else{
            dispatch({
                type: "ADD_FAVORITE",
                playload: result
            });
        }
          
      }

    const showStar = () => {
        if(state.allMovies.favorites && state.allMovies.favorites.some((item:any) => item.linkApi === state.allMovies.detail)) {
            return (<span className="star starActive" onClick={handleClickDetail}>★</span>)
        } else {
           return (<span className="star" onClick={handleClickDetail}>☆</span>)
        }
    }



    return (
             <div>
                 <h1>Movie details </h1>


            {Object.keys(movieDetails.Title).length === 0 ? (<div>...Loading</div>) :
                (
                    <article className="detailMovie">
                        <div className="detailInside">
                             <div className="divstar">
                                 {showStar()}</div>
                            <h2>{movieDetails.Title}</h2>
                            <div>
                                <div className="detailDivPicture"><img src={movieDetails.Poster} alt="movie art" /> </div>

                                <div className="detailText">  
                                    <p> <strong>Rating:</strong> {movieDetails.imdbRating} </p>
                                    <p> <strong>Genre:</strong> {movieDetails.Genre} </p> 
                                    <p> <strong>Runtime:</strong> {movieDetails.Runtime} </p> 
                                    <p> <strong>Country:</strong> {movieDetails.Country} </p> 
                                    <p> <strong>Director:</strong> {movieDetails.Director}  </p> 
                                    <p> <strong>Writer:</strong> {movieDetails.Writer}  </p> 
                                    <p> <strong>Actor:</strong> {movieDetails.Actors} </p> 
                                    <p> <strong>Released:</strong>  {movieDetails.Released}</p> 
                                </div>

                            </div>

                            <div className="plot">
                                 Plot: {movieDetails.Plot} 
                            </div>

                        </div>
                    </article>
                )}


      </div>
    )
}

export default Details
