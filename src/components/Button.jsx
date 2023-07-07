import { useContext } from "react";
import { ThemeContext } from "../App";


export default function Button() {


    const theme = useContext(ThemeContext);
    return (
        <button className={theme}>
            Click me
        </button>
    );
}