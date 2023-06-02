import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import CloseButton from 'react-bootstrap/CloseButton';

export default function TodoFn() {

    let [tasks, setTasks] = useState([]);
    let [newTask, setNewTask] = useState("");

    let handleNewTask = (e) => {
        setNewTask(e.target.value);
    }

    let addNewTask = () => {
        if (newTask !== "") {
            setTasks([...tasks, newTask])
            setNewTask("")
        }
        // Prevent duplicate task
        else {
            alert("You can't add an empty task")
        }
    }

    let finishTask = (ev) => {
        ev.target.classList.toggle("list-group-item-success")
        ev.target.classList.toggle("list-group-item-primary")

        
        // if (ev.target.classList.contains("list-group-item-primary")) {
        //     ev.target.classList.add("list-group-item-success")
        //     ev.target.classList.remove("list-group-item-primary")
        // }
        // else {
        //     ev.target.classList.remove("list-group-item-success")
        //     ev.target.classList.add("list-group-item-primary")
        // }
    }


    let deleteTask = (ev) => {
        let taskIndex = +(ev.target.parentElement.getAttribute("task-order"));
        let newTasks = tasks;
        newTasks.splice(taskIndex, 1);
        setTasks([...newTasks]);
    }
    return (
        <Container>
            <h1>Todo class</h1>
            <Row className='m-4'>
                <Col md={9}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Please enter your task" onChange={handleNewTask} value={newTask} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Button variant="primary" onClick={addNewTask}>Add new task</Button>
                </Col>
            </Row>
            {tasks.length === 0
                ?
                <Alert variant="warning">
                    There is no tasks here
                </Alert>
                :
                <ListGroup className='w-75 mx-auto my-4'>
                    {tasks.map((course, index) =>
                        <ListGroup.Item onClick={finishTask} key={index} task-order={index} variant="primary" className="d-flex justify-content-between">
                            <div>{course}</div>
                            <CloseButton onClick={deleteTask} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
            }
        </Container>
    )
}
