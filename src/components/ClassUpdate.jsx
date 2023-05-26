import React, { Component } from 'react'

export default class ClassUpdate extends Component {

  state = {
    courseName: "React course"
  }

  handleCourse = (e) => {
    this.setState({ courseName: e.target.value })
  }
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <input type="text" onChange={this.handleCourse} />
        <h4>{this.state.courseName}</h4>
      </div>
    )
  }
}
// binding