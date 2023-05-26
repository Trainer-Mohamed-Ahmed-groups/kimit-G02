import React from 'react'
import { courses } from '../assets/data/courses';

export default function FunctionExplain() {

    function handleClick() {
        console.log("Hello from function")
    }

    return (
        <div>
            {courses.courses.map((course, index) =>
                <div key={index}>
                    <h3>{course.courseName}</h3>
                    <p>{course.courseDescription}</p>
                    <hr />
                </div>
            )}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
