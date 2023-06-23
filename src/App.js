import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SiteNav from "./components/SiteNav";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import { useState } from "react";
import ClassExplain from "./components/ClassExplain";

function App() {

    return (
        <div className="App">
            <SiteNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/class" element={<ClassExplain />} />
            </Routes>

        </div>
    );
}

export default App;
