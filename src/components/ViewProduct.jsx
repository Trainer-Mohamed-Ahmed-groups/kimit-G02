import React from 'react'
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function ViewProduct({ product }) {
    return (
        <Col sm={4} className="p-3">
            <Card className="h-100">
                <Card.Img variant="top" src={product.images[2]} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
