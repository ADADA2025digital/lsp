import { useEffect } from "react";
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
import BackToTop from "./Components/BacktToTop";
import Home from "./Pages/Home";
import Services from "./Pages/OurServices";
import Video from "./assets/Video/video.mp4";

function App() {
  useEffect(() => {
    // Combined approach: Use both methods for better coverage
    let preloadVideoElement;

    // Method 1: Link preload for browsers that support it
    try {
      const videoLink = document.createElement('link');
      videoLink.rel = 'preload';
      videoLink.as = 'fetch';
      videoLink.href = Video;
      videoLink.type = 'video/mp4';
      videoLink.crossOrigin = 'anonymous';
      document.head.appendChild(videoLink);
    } catch (error) {
      console.log('Link preload not supported:', error);
    }

    // Method 2: Video element preload as fallback
    preloadVideoElement = document.createElement('video');
    preloadVideoElement.preload = 'auto';
    preloadVideoElement.muted = true;
    preloadVideoElement.style.display = 'none';
    preloadVideoElement.style.position = 'absolute';
    preloadVideoElement.style.left = '-9999px';
    
    const source = document.createElement('source');
    source.src = Video;
    source.type = 'video/mp4';
    
    preloadVideoElement.appendChild(source);
    document.body.appendChild(preloadVideoElement);

    return () => {
      // Cleanup video element
      if (preloadVideoElement && document.body.contains(preloadVideoElement)) {
        document.body.removeChild(preloadVideoElement);
      }
    };
  }, []);

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
        <BackToTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;