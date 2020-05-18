import { ADD_VIDEO } from "../actions/types"

const initialState=[]
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_VIDEO:
            return action.payload
        default:
            return state

    }
    

}