import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Task from './Task';

const TaskList = () => {
    const [filter,setFilter]=useState(false);
    const [done,setDone]=useState(true);
    const todos = useSelector((state)=> state.todoReducer.todos);
  return (
    <div>
      <Button variant="outline-success" onClick={()=>setFilter(false)}>Show All</Button>
      <Button variant="outline-warning" onClick={()=>{setFilter(true);setDone(false)}}>Show not Done </Button>
      <Button variant="outline-danger" onClick={()=>{setFilter(true);setDone(true)}}>Show Done</Button>
      <br/>
      <br/>
        {
        !filter ? todos.map((el) => (
            <Task key={el.id} el={el} />)) 
            : done ? todos.filter(el=>el.done).map((el) => (
            <Task key={el.id} el={el} />)) 
            : todos.filter(el=>!el.done).map((el) => (
            <Task key={el.id} el={el} />))
        }
    </div>
  )
}

export default TaskList