import React, { Component } from "react";

export default class ClassExplain extends Component {
    let;

    state = {
        courses: [
            { id: 1, title: "React", category: "FrontEnd" },
            { id: 2, title: "JS", category: "FrontEnd" },
            { id: 3, title: "HTML", category: "FrontEnd" },
            { id: 4, title: "CSS", category: "FrontEnd" }
        ],
        username: "Mohamed",
        usernameInput: "",
        editedCourseTitle: "",
        editedCourseID: null
    };

    handleUsername = ev => {
        this.setState({ username: ev.target.value });
        // this.setState({ usernameInput: ev.target.value })
        // if (ev.nativeEvent.data === "d") {
        //     alert("Do you blabla")
        // }
    };

    changeUsername = () => {
        this.setState({ username: this.state.usernameInput });
    };

    componentDidMount() {
        console.log("Rendered");
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    componentWillUnmount() {
        console.log("removed");
    }

    deleteCourse = courseIndex => {
        // let newCourses = this.state.courses;

        // newCourses.splice(courseIndex, 1)
        // this.setState({ courses: newCourses })
        // console.log(this.state.courses)

        this.setState({
            courses: this.state.courses.filter(
                (course, index) => index !== courseIndex
            )
        });
    };

    // For edit course btn
    editCourse = (courseIndex, courseId) => {
        this.setState({
            editedCourseTitle: this.state.courses[courseIndex].title,
            editedCourseID: courseId
        });
    };

    handleCourse = ev => {
        this.setState({ editedCourseTitle: ev.target.value });
    };

    addEditedCourse = () => {
        let newCourses = this.state.courses,
            editedCourse = newCourses[this.state.editedCourseID - 1];

        editedCourse.title = this.state.editedCourseTitle;

        // editedCourse.title = this.state.editedCourseTitle

        this.setState({
            courses: newCourses,
            editedCourseTitle: "",
            editedCourseID: null
        });
    };
    render() {
        return (
            <div>
                <h2>ClassExplain</h2>
                <hr />
                <input type="text" onChange={this.handleUsername} />
                <button onClick={this.changeUsername}>Change</button>
                <div>
                    {this.state.username}
                </div>
                <hr />
                {/* <div>{this.state.courses[0].title}</div> */}
                <ul>
                    {this.state.courses.length > 0
                        ? this.state.courses.map((course, index) =>
                            <li
                                key={index}
                                className="d-flex justify-content-around m-2"
                            >
                                <div>
                                    {course.title}
                                </div>
                                <button
                                    onClick={() => this.deleteCourse(index)}
                                >
                                    Delete course
                                </button>
                                <button
                                    onClick={() =>
                                        this.editCourse(index, course.id)}
                                >
                                    Edit course
                                </button>
                            </li>
                        )
                        : <h3>There are no Courses here</h3>}
                </ul>
                <label>Edit course : </label>
                <input
                    type="text"
                    value={this.state.editedCourseTitle}
                    onChange={this.handleCourse}
                    disabled={this.state.editedCourseID === null}
                />
                <button onClick={this.addEditedCourse}>Submit</button>
            </div>
        );
    }
}
