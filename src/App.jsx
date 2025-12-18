import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from './nav';
import Profile from './profile';
import Skill from './skill';
import Project from './project';
import Contact from './contact';
import About from './about';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
