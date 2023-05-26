import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function CounterTwo() {
    var [count, setCount] = useState(0);

    var increase = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>CounterTwo</h2>
            <Button onClick={increase} variant="primary">Counter is {count}</Button>
        </div>
    )
}
