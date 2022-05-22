import React, { useState } from "react";
import {Row, Col, Button, Table} from "reactstrap";

const ListTask = (props) => {
    const {listTask, handleDeleteTask, editTask} = props
    return(
        <>
            <Table>
                <thead style={{color : "black", background: "aqua"}}>
                    <tr>
                        <td>STT</td>
                        <td>Task</td>
                        <td>User Id</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    
                    {listTask.map( (task, i) => {
                        return(
                            <tr>
                                <td>{ i + 1 }</td>
                                <td>{task.name}</td>
                                <td>{task.user_id}</td>
                                <td>
                                    <Button color="warning" onClick={() => editTask(task.id)}>Edit</Button> &nbsp;
                                    <Button color="danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default ListTask;