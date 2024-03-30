import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./Reducer/";
import styled from 'styled-components'
import Delete from './delete.png'

const Todo = () => {

  //usestate for text
  const [text, setText] = useState("");

   const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  //input changing
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  //function to add todo and reset text box
  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  //handle toggle
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  //handling delete
  const handleDeleteTodo = (id) => {
   dispatch(deleteTodo(id));
  };




  return (
         <Container>
    <h1 className="title">Todo Application</h1>

    {/* todo input */}
    <div className="input">
        <input type="text" value={text} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Task</button>
    </div>

    {/* todo list */}
      <ul className="view">
        {todos.map((todo) => (
          <li
            key={todo.id}

          > <p style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color:'white'
          }}>{todo.text}</p>
               <input type="checkbox"  onClick={() => handleToggleComplete(todo.id)} defaultChecked={todo.completed?true:false}/>

             <img src={Delete} alt="delete" onClick={() => handleDeleteTodo(todo.id)} />

          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Todo;

//container for todo
const Container = styled.div`
    display:flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    width: 40rem;
    background-color: black;
    height:40rem;
    .title{
       color:white;
    }
    .input{
        display: flex;
    }
    .input input{
        background-color: black;
        border: 2px solid purple;
        height: 2rem;
        width: 16rem;
        margin-right: 1rem;
        color: #fdfafad5;
        font-size: larger;
    }
    .input button{
        background-color: purple;
        color:white;
        height: 2.5rem;
        width:8rem;
    }
    .view{
      display: flex;
      width:26rem ;
      flex-direction: column;
      list-style: none;
      padding-top: 0.5rem;
      padding-left:0;
      position: relative;
    }
    .view li{
      width: 25rem;
      background-color: purple;
      display: flex;
      height: auto;
      font-size: larger;
      margin-bottom:0.5rem;
      align-items: center;
      justify-items: center;
    }
    li p{
      margin-left:14px;
      height: auto;
      width: 20rem;
      overflow-wrap: break-word;
    }
    input[type='checkbox']{
      position : absolute;
      left:21rem;
      width: 1.25rem;
      height: 1.25rem;
      accent-color: purple;

    }
    img{
      width: 1.25rem;
      height: 1.25rem;
      position : absolute;
      left:23rem;
      color: white;
    }
`