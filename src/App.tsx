import NavBar from "./components/NavBar.tsx";
import ProjectList from "./components/Projects.tsx";
import Project from "./components/Project.tsx";

import About from "./components/About.tsx";

import {Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <ProjectList />
      <Project />
      <About />
    </>
  );
}
