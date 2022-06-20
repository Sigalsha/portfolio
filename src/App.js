import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Landing from "./components/Landing";
import About from "./components/About";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./hooks/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<TechSkills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
