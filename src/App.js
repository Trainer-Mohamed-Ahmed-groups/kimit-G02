import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SiteNav from "./components/SiteNav";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ClassExplain from "./components/ClassExplain";
import { createContext, useState } from "react";
import Panel from "./components/Panel";

export const ThemeContext = createContext(null)
function App() {

    const [theme, setTheme] = useState("light");
    let handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <ThemeContext.Provider value={theme}>
            <SiteNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/class" element={<ClassExplain />} />
            </Routes>

            <button onClick={handleTheme}>{theme === "dark" ? "light" : "dark"}</button>
            <Panel />
        </ThemeContext.Provider>
    );
}

export default App;
