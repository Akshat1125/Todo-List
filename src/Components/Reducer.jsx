import { createSlice } from "@reduxjs/toolkit";

//initial state for localstorage or without localstorage
const todo=localStorage.getItem('todo')!==null? JSON.parse(localStorage.getItem('todo'))
  :[];

//todoslice with reducers
const todoSlice = createSlice({
  name: "todos",
  initialState: todo,
  reducers: {

    //adding todo to state and localstorage
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
      localStorage.setItem('todo',JSON.stringify(state));
    },

    //toggle to complete or not using checkbox in todo
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todo',JSON.stringify(state));
      }
    },

    //delete the todo from localstorage and state
    deleteTodo: (state, action) => {
      localStorage.setItem('todo',JSON.stringify(state.filter((todo) => todo.id !== action.payload)));
      return state.filter((todo) => todo.id !== action.payload);

    },
  },
});

//export
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;