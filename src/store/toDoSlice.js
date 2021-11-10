import { v4 as uuidv4 } from "uuid"
import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
    {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false,
    },
]


export const toDoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue
    },
    reducers: {
        deleteToDo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        addToDo: (state, action) => {
            const newTodo = {id : uuidv4(), ...action.payload }
            state.todos = [...state.todos, newTodo]
        },
        toggleToDoStatus: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })
        }
    }
})


export const {deleteToDo,addToDo,toggleToDoStatus} = toDoSlice.actions;
export default toDoSlice.reducer