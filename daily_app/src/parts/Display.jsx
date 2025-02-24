import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from "./Invicibleman";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromList, setSelectedTodoList } from "../Redux/slices/Taskslice";

const Display = () => {

  const dispatch = useDispatch()

  const { todoList } = useSelector((state) => state.tasks);

  const edit = (data)=> {
    console.log("updated");
    setModalShow(true);
    dispatch(setSelectedTodoList(data))
  }

  
  const del = (data)=> {
    console.log("delete");
    dispatch(deleteFromList(data))
  }

  // for trigger pop-up modal
  const [modalShow, setModalShow] = useState(false);
  // for trigger pop-up modal

  return (
    <>
      <div className="my-3">
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>s-no</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList &&
              todoList.map((data,index) => {
                return (
                  <tr className="text-center" key={data.id}>
                    <td>{index+1}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td className="d-flex justify-content-evenly gap-2 align-items-center">
                      <Button variant="primary" onClick={()=>edit(data)}>
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                      <Button variant="primary" onClick={()=>del(data)}>
                        <i className="bi bi-x-square-fill"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Display;
