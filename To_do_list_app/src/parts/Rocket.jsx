import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addToList } from '../Redux/slices/Taskslice';
import { useDispatch } from 'react-redux';

const Rocket = () => {

  const dispatch = useDispatch() ;

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')


    const addTask = (e) => {
        e.preventDefault();
        console.log({title,description});
        dispatch(addToList({title,description}));
        setTitle('')
        setDescription('')
    }


  return (
    <>
    <div >
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="escription" placeholder="Enter your Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
      <div className='text-end'>
      <Button variant="primary" onClick={(e)=>addTask(e)} type="submit">
        Add Task
      </Button>
      </div>
    </Form>
    </div>
    </>
  )
}

export default Rocket