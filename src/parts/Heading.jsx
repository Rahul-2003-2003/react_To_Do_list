import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Heading = () => {

  const {todoList} = useSelector((state)=> state.tasks)

  return (
    <>
    <Container className='my-5'>
        <h3 className='text-center text-primary'>To-Do List</h3>
        <h1 className='text-center lead'>{`Currently ${todoList.length} Task(s) Pending`}</h1>
    </Container>
    </>
  )
}

export default Heading