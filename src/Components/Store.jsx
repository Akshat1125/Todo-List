import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Reducer/';


//store
const Store = configureStore({
 reducer: {
 todos: todoReducer,
 },
});

export default Store;