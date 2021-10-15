import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




const Favourites = () => {

    const dispatch = useDispatch();
    const state = useSelector((state:any) => state)
    const handleClickRemove = (e:any) => {
        const { id } = JSON.parse(e.target.dataset.onclickparam)
        const favoritiesMovies:[] = state.allMovies.favorites;
        const result = favoritiesMovies.filter((movie: any) => movie.linkApi !== id); // Remove by ID
          
        dispatch({
          type: "DELETE_FAVORITE",
          playload: result
        });
      }

    const showMovies = (all:any) => {
        if(all === undefined || all.length <= 0) {
            return (
                <div className="zoomfadein">You haven't saved anything yet. Search for a movie or a tv series and add it to you favourites.  </div>
            )
        } else {
            return (
                all.map((movie:any) => (
                    <li key={movie.linkApi} className="leftFadeIn">
                        
                        <article className="movieFavorite">
                            <div className="inside">
                                <h2>{movie.title}</h2>
                                <div className="imgMovie">
                                    <img src={movie.poster} alt="movie art" />
                                    <Link to={`/details/${movie.linkApi}`}><div className="btn btnDetail"> Details </div></Link>
                                    <div className="btn btnRemove" onClick={handleClickRemove} data-onclickparam={JSON.stringify({ id: movie.linkApi }) }> Remove </div>
                                </div>
                            </div>
                        </article>
                        
                    </li>
                ))
            )
        }
    }

            return (

                    <div>
                        <h1>Favourites movies</h1>
                        <ul className="moviesList">
                            {showMovies(state.allMovies.favorites)} 
                        </ul>
                    </div>
            )
}

export default Favourites
