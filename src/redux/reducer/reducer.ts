import { actionTypes } from "../contants/actionTypes";

const initialState = {}


export const setReducer = (state: any = initialState, {type, playload}:any ) => {

    const params = [] as any;

        switch (type) {
            case actionTypes.SET_MOVIE:
                return {...state, movies:playload}

            case actionTypes.SELECTED_MOVIE:
                return {...state, detail:playload}


            case actionTypes.ADD_FAVORITE: {

               if(state.favorites === undefined){
                   params.push(playload)
                return {...state, favorites: params}
               } else{
                   let historia = state.favorites;
                   historia.push(playload)

                   historia.forEach((element:any) => {
                         params.push(element)
                   });

                return {...state, favorites: params}
               }

            }

            case actionTypes.DELETE_FAVORITE:

                return {...state, favorites:playload}
            

            default:
                return state
        }

}