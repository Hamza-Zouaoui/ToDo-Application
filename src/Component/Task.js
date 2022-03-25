
import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleDone } from '../Redux/actions/TodoActions';
import EditTask from './EditTask';

const Task = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <ul style={{textDecoration:  el.done && "line-through" }}> {el.task} </ul>
        <Button variant="outline-primary" onClick={()=>dispatch(toggleDone(el.id))}>Done</Button>
        <Button variant="outline-primary" onClick={()=>dispatch(deleteTask(el.id))}>Delete</Button>
        <EditTask el={el} />
    </div>
  )
}

export default Task