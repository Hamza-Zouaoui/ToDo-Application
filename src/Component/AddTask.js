import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from "../Redux/actions/TodoActions";

const AddTask = () => {
  const [text, setText]=useState("");
  const dispatch = useDispatch();
  const hundleSubmit = () =>{
    dispatch(addTask(text));
    setText("");
  };
  return (
    <Form>
        <Form.Control type="text" placeholder="Enter a Task" onChange={(el)=>setText(el.target.value)} 
        value={text}></Form.Control>
            <Button variant="info" onClick={hundleSubmit}> Add Task ! </Button>
    </Form>
  )
}

export default AddTask;