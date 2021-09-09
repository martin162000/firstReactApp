import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";


// Styles
import './TheNavigation.scss';



const TheNavigation = () => {

    const state = useSelector((state:any) => state)
    let savedUrlDetail: string = "/details"

    // save details MOVIE param
    if(state.allMovies.detail !== undefined){
       savedUrlDetail = "/details/"+state.allMovies.detail
    }

    return (

        <nav className="navigation">
            <NavLink to="firstReactApp/" exact>Movies</NavLink>
            <NavLink to={savedUrlDetail}>Details</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
        </nav>

    )
}

export default TheNavigation
