import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList : [],
    selectedTodoList : {}
}


 export const todoSlice = createSlice({
    name : "todoSlice",
    initialState,
    reducers : {
        addToList : (state,action)=> {
            const id = Math.floor(Math.random() * 100) ;
            let task = {...action.payload,id} ;
            state.todoList.push(task);
        },
        deleteFromList : (state,action)=> {
            state.todoList = state.todoList.filter((data)=> data.id !== action.payload.id )
        },
        updateToList : (state,action)=> {
            state.todoList = state.todoList.map((data)=> data.id === action.payload.id ? action.payload : data)
            // console.log("i'm triggered");
        },
        setSelectedTodoList : (state,action)=> {
            state.selectedTodoList = action.payload
        }
    }

 })

 export const {addToList,updateToList,deleteFromList,setSelectedTodoList} = todoSlice.actions

 export default todoSlice.reducer ;