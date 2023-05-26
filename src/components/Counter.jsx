import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Counter() {
    var [count, setCount] = useState(0);

    var increase = () => {
        setCount(count + 1)
    }
    var decrease = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h2>Counter</h2>
            <hr />
            <Container>
                <Row>
                    <Col>
                        <Button onClick={increase} variant="primary">Primary</Button>
                    </Col>
                    <Col>
                        <h4 className={count > 0 ? "text-primary" : count < 0 ? "text-danger" : "text-warning"}>{count}</h4>
                    </Col>
                    <Col>
                        <Button onClick={decrease} variant="danger">Danger</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
