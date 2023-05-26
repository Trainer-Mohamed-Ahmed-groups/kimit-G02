import React, { Component } from 'react'
import { courses } from '../assets/data/courses';
export default class ClassExplain extends Component {

    // constructor(props) {
    //     super(props)

    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = courses;

    handleClick = () => {
        console.log(this)
    }

    coursesShow = this.state.courses.map((course, index) =>
        <div key={index}>
            <h3>{course.courseName}</h3>
            <p>{course.courseDescription}</p>
            <hr />
        </div>
    )

    render() {
        return (
            <div>
                <h2>Class explain</h2>
                {this.coursesShow}
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}
