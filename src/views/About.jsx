import { useEffect, useState } from "react";
export default function About() {

    var [username, setUserName] = useState("");

    let handleUsername = (e) => {
        setUserName(e.target.value);
    }


    useEffect(() => {
        console.log("Rendered")

    }, [])

    useEffect(() => {
        console.log("Updated")
    }, [username])

    useEffect(() => {
        return () => {
            console.log("هل انت متاكد انك ")
        }
    })
    return (
        <div>
            <h2>About</h2>

            <input type="text" value={username} onChange={handleUsername} />
        </div>
    )
}
