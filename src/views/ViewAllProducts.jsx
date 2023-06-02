import React from 'react'
import Product from '../components/Product'
import { Col, Container, Row } from 'react-bootstrap'

export default function ViewAllProducts() {
    let courses = [
        { courseName: "HTML", courseDescription: "HyperText markup language", bg: "primary" },
        { courseName: "CSS", courseDescription: "Cascading style sheet ", bg: "secondary" },
        { courseName: "JS", courseDescription: "Scripting language", bg: "success" },
        { courseName: "React", courseDescription: "SPA", bg: "info" },
    ]
    return (
        <div>
            <h2>All products</h2>
            <Container>
                <Row>
                    {courses.map((course, index) =>
                        <Col key={index}>
                            <Product cardTitle={course.courseName} card_description={course.courseDescription} id={index} bg={course.bg} />
                        </Col>
                    )}
                </Row>
            </Container>

        </div>
    )
}
