import {combineReducers} from "@reduxjs/toolkit";

import FilterReducer from "../slices/FilterSlice"


const rootReducer  = combineReducers({
    filter: FilterReducer,
})

export default rootReducer