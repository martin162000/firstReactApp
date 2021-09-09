import { combineReducers } from "redux";
//import { selectedMovie } from "../actions/actions";
import {setReducer} from "./reducer"

const reducers = combineReducers({
    allMovies: setReducer
})

export default reducers;