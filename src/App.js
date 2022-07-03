import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import MenuContextProvider from "./contexts/MenuContext";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Landing from "./pages/Landing";
import About from "./pages/About";
import TechSkills from "./pages/TechSkills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollToTop from "./hooks/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <MenuContextProvider>
        <div className="App">
          <Header />
          <ScrollToTop />
          <div className="main-container">
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<TechSkills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </MenuContextProvider>
    </Router>
  );
}

export default App;
