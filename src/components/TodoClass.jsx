import React, { Component, createRef } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default class TodoClass extends Component {

    state = {
        courses: [],
        newCourse: ""
    }

    inputRef = createRef();

    
    handleNewCourse = (ev) => {
        this.setState({ newCourse: ev.target.value });
    }

    addNewTask = () => {
        // let newCourses = this.state.courses;
        // newCourses.push(this.state.newCourse)
        // this.setState({ courses: newCourses })
        // this.setState({ newCourse: "" })

        let newCourses = [...this.state.courses, this.state.newCourse];
        this.setState({ courses: newCourses, newCourse: "" })

        this.inputRef.current.focus();
    }
    render() {
        return (
            <Container>
                <h1>Todo class</h1>
                <Row className='m-4'>
                    <Col md={9}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Please enter your task" onChange={this.handleNewCourse} value={this.state.newCourse} ref={this.inputRef} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Button variant="primary" onClick={this.addNewTask}>Add new task</Button>
                    </Col>
                </Row>
                {
                    this.state.courses.length === 0
                        ?
                        <Alert variant="warning">
                            There is no tasks here
                        </Alert>
                        :
                        <ListGroup className='w-75 mx-auto my-4'>
                            {this.state.courses.map((course, index) =>
                                <ListGroup.Item key={index} variant="primary">{course}</ListGroup.Item>
                            )}
                        </ListGroup>
                }
            </Container>
        )
    }
}
