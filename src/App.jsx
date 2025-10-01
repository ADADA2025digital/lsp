import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./assets/Styles/Style.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";
import OurClients from "./Pages/OurClients";
import About from "./Pages/About";
// import BackToTop from "./Components/BacktToTop";
import Home from "./Pages/Home";
import Services from "./Pages/OurServices";

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-clients" element={<OurClients />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <ScrollToTop />
        {/* <BackToTop /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
