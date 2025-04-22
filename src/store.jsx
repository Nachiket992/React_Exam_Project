import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from './Feature/allStudentsSlice'

export const store =  configureStore({
    reducer : {
        students : fetchReducer
    }
});