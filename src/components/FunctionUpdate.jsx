import React from 'react'
import { useState } from "react"

export default function Update() {
    let [courseName, setCourseName] = useState("React course");

    const handleCourse = (e) => {
        setCourseName(e.target.value)
    }
    return (
        <div>
            <h2>Function component</h2>
            <input type="text" onChange={handleCourse} />
            <h4>{courseName}</h4>
        </div>
    )
}
