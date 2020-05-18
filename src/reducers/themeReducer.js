import { ADD_THEME } from "../actions/types"

const initialState=false
export const themeReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_THEME:
            return action.payload
        default:
            return state

    }
    

}