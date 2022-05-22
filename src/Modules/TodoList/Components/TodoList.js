import React, { useState, useEffect } from "react";
import {Row, Col, Button, Input} from "reactstrap";
import ListTask from "./ListTask/ListTask";
import axios from "axios";
const TodoList = () => {
    const [task, setTask] = useState({
        name: "",
        user_id: ""
    })
    const [ listTask, setListTask ] = useState([])
    const [ check, setCheck ] = useState(false)
    const [checkEdit, setCheckEdit] = useState(false);
    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setTask({...task,[name] : value})

    }
    useEffect(() => {
         axios.get('https://authencation.vercel.app/api/todo/list')
        .then(res => {
            setListTask(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    useEffect(() => {
         axios.get('https://authencation.vercel.app/api/todo/list')
        .then(res => {
            setListTask(res.data)
        })
        .catch(err => console.log(err))
    }, [checkEdit])
    
    const handleAddTask = () => {
        axios.post('https://authencation.vercel.app/api/todo/create', task)
        .then(res => {
            setTask({
                name: "",
                user_id: ""
            })
            setCheckEdit(!checkEdit)
        })
        .catch(err => console.log(err))
    }
    const handleDeleteTask = (id) => {
        axios.post(`https://authencation.vercel.app/api/todo/delete?id=${id}`)
        .then(res => {
            setCheckEdit(!checkEdit)
        })
        .catch(err => console.log(err))
    }
    const editTask = (id) => {
        setTask({...task, id: id})
        axios.get(`https://authencation.vercel.app/api/todo/get?id=${id}`)
        .then(res => {
            setTask(res.data)
        })
        .catch(err => console.log(err))
        setCheck(true)
    }
    const handleUpdateTask = () => {
        axios.post(`https://authencation.vercel.app/api/todo/update?id=${task.id}`, task)
        .then(res => {
            setTask({
                name: "",
                user_id: ""
            })
            setCheckEdit(!checkEdit)
            setCheck(false)
        })
        .catch(err => console.log(err))
    }
    return(
        <>
            <h1 className="middle">My Todo List</h1>
            <Col xs={{size: 6, offset: 3}}>
                <Row>
                    <Col xs={{size: 6}}>
                        <Input name="name" value={task.name} onChange={(e) => handleChangeInput(e)} type="text" placeholder="Enter name of task...." />
                    </Col>
                    <Col xs={{size: 6}}>
                        <Input disabled={check} name="user_id" value={task.user_id} onChange={(e) => handleChangeInput(e)} type="text"  placeholder="Enter user_id...." />
                    </Col>
                    <Col className="end mt-10" >
                        {
                            check ? 
                            <Button onClick={handleUpdateTask} color="success">Update</Button>
                            :
                            <Button onClick={handleAddTask} color="success">Add</Button>
                        }
                    </Col>
                </Row>
            </Col>
            <Col xs={{ size: 6 ,offset: 3}}>
                <Row>
                    <Col xs={{size: 6}}>
                        <Input type="text" placeholder="Search by name..." />
                    </Col>
                    <Col xs={{size: 6}}>
                        <Button> Search </Button>
                    </Col>
                </Row>
            </Col>
            <Row className="ml-10">
                <ListTask editTask={editTask} listTask={listTask} handleDeleteTask={handleDeleteTask} />
            </Row>
            
        </>
    )
}
export default TodoList;