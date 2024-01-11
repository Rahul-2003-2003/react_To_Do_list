import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateToList } from "../Redux/slices/Taskslice";


const MyVerticallyCenteredModal = (props) => {

  
  const {selectedTodoList} = useSelector((state)=>state.tasks)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id,setId] = useState(0) 
  const dispatch = useDispatch() ;

  useEffect(()=>{
    if(Object.keys(selectedTodoList).length !== 0){
    setTitle(selectedTodoList.title)
    setDescription(selectedTodoList.description)
    setId(selectedTodoList.id)
    }
  },[selectedTodoList])

  const updateTask = () => {

    props.onHide()
    dispatch(updateToList({id,title,description}))

  }
 
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update a Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="escription"
                placeholder="Enter your Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-end">
            <Button variant="primary" onClick={(e) => updateTask(e)} type="submit">
              Update Task
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyVerticallyCenteredModal;
