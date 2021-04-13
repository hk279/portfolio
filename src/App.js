import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Menu from "./components/Menu";

const App = () => {
    return (
        <div>
            <Menu />
            <Navigation />
            <Home id="home" />
            <AboutMe id="about-me" />
            <Projects id="projects" />
            <CV id="cv" />
        </div>
    );
};

export default App;
