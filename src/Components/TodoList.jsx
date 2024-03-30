import React from 'react'
import styled from 'styled-components'

export default function TodoList() {
  return (
    <Container>
    <h1 className="title">Todo Application</h1>
    <div className="input">
        <input type="text" />
        <button>Add Task</button>
    </div>
    </Container>
  )
}

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
`
