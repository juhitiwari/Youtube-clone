import { createStore, combineReducers } from "redux";
import {reducer} from "../reducers/reducer";
import { themeReducer } from "../reducers/themeReducer";





const store=createStore(
    combineReducers({
        cardData:reducer,
        myDarkMode:themeReducer

    })

)

export default store