import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Product({ cardTitle, card_description, id, bg }) {
    return (
        <Card className={"h-100 bg-" + bg}>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{card_description}</Card.Text>
                <Card.Link href={id}>Go</Card.Link>
            </Card.Body>
        </Card>
    )
}
