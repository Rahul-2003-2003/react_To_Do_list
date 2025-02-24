import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from './slices/Taskslice'


export const store = configureStore({
    reducer : {
        tasks : tasksReducers
    }
})