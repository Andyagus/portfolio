import NavBar from "./components/NavBar.tsx";
import ProjectList from "./components/Projects.tsx";
import Project from "./components/Project.tsx";

import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

const measurementId = "G-79VS217Y6J";
ReactGA.initialize(measurementId);
// Updated array to store image URLs directly

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
