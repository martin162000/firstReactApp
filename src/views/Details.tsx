import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import  {apiKey}  from '../types/types'


const Details = () => {

    const state = useSelector((state:any) => state)
    const dispatch = useDispatch();
    const { movieId } = useParams<{ movieId: string }>();
    const refBlockDetails:any = useRef(null);


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
            refBlockDetails.current.classList.add("pulse");
            dispatch({
                type: "ADD_FAVORITE",
                playload: result
            });

        }else{
            refBlockDetails.current.classList.add("pulse");
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



    const showDetail = (details:any) => {
        if(!!details.Title) {
            return (
                <article className="detailMovie zoomfadeOut" ref={refBlockDetails}>
                <div className="detailInside">
                    <div className="divstar">
                        {showStar()}</div>
                    <h2>{details.Title}</h2>
                    <div>
                        <div className="detailDivPicture"><img src={details.Poster} alt="movie art" /> </div>

                        <div className="detailText">  
                            <p> <strong>Rating:</strong> {details.imdbRating} </p>
                            <p> <strong>Genre:</strong> {details.Genre} </p> 
                            <p> <strong>Runtime:</strong> {details.Runtime} </p> 
                            <p> <strong>Country:</strong> {details.Country} </p> 
                            <p> <strong>Director:</strong> {details.Director}  </p> 
                            <p> <strong>Writer:</strong> {details.Writer}  </p> 
                            <p> <strong>Actor:</strong> {details.Actors} </p> 
                            <p> <strong>Released:</strong>  {details.Released}</p> 
                        </div>

                    </div>

                    <div className="plot">
                    <strong>Plot:</strong> {details.Plot} 
                    </div>

                </div>
            </article>
        
         )} else if(movieId) {
            return (<div>...Loading</div>) 
        }
        else {
           return (<div className="zoomfadein">You must search and choice movie or tv series for show his details</div>) 
       }
    }





    return (
             <div>
                 <h1>Movie details </h1>
                    {showDetail(movieDetails)}


      </div>
    )
}

export default Details
