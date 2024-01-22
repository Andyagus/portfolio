import NavBar from "./components/NavBar.tsx";
import ProjectList from "./components/Projects.tsx";
import Project from "./components/Project.tsx";

import About from "./components/About.tsx";

import {Route, Routes} from "react-router-dom";


// Updated array to store image URLs directly

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ProjectList />} />
                <Route path="/projects/:id" element={<Project/>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};
