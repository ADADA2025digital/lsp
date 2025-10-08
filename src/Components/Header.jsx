import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Images/logo.png";
import { motion } from "framer-motion";

export default function Header() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Reserve space for fixed navbar + add shadow after a tiny scroll
  useEffect(() => {
    const updateOffsets = () => {
      const h = navRef.current?.offsetHeight || 0;
      document.body.style.paddingTop = `${h}px`; // push page down so content isn't hidden
    };
    const onScroll = () => setScrolled(window.scrollY > 10);

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateOffsets);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeOffcanvas = () => {
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      const offcanvasInstance =
        window.bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasInstance?.hide();
    }
  };

  // Function to check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="container-fluid d-md-flex flex-column p-0">
        <nav
          ref={navRef}
          className={`navbar navbar-expand-lg bg-white fixed-top p-0 pb-1 ${
            scrolled ? "shadow-sm" : ""
          } navbar-light`}
          style={{ top: 0, zIndex: 1030 }}
        >
          <div className="container">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            >
              <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src={Logo} alt="Logo" height="60" />
              </Link>
            </motion.div>

            {/* Toggler */}
            <button
              className="navbar-toggler border rounded-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Items */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav px-2">
                <motion.li
                  className={`nav-item px-2 py-3 ${isActive("/") ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.1 },
                  }}
                >
                  <Link className="nav-link text-dark text-uppercase" to="/">
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  className={`nav-item px-2 py-3 ${isActive("/about-us") ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                >
                  <Link className="nav-link text-uppercase" to="/about-us">
                    About Us
                  </Link>
                </motion.li>
                <motion.li
                  className={`nav-item px-2 py-3 ${isActive("/our-clients") ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.3 },
                  }}
                >
                  <Link className="nav-link text-uppercase" to="/our-clients">
                    Our Clients
                  </Link>
                </motion.li>
                <motion.li
                  className={`nav-item px-2 py-3 ${isActive("/our-services") ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.4 },
                  }}
                >
                  <Link className="nav-link text-uppercase" to="/our-services">
                    Our Services
                  </Link>
                </motion.li>
                <motion.li
                  className={`nav-item px-2 py-3 ${isActive("/our-team") ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.5 },
                  }}
                >
                  <Link className="nav-link text-uppercase" to="/our-team">
                    Our Team
                  </Link>
                </motion.li>
                <motion.li
                  className={`nav-item px-2 py-3 ${isActive("/contact") ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.6 },
                  }}
                >
                  <Link className="nav-link text-uppercase" to="/contact">
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end bg-white w-100"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-light border-bottom text-white">
            <img src={Logo} alt="Logo" height={60} />
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body text-dark d-flex flex-column align-items-center justify-content-center vh-100 gap-5">
            <ul className="navbar-nav text-center gap-5">
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-uppercase"
                  to="/"
                  onClick={closeOffcanvas}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-uppercase"
                  to="/about-us"
                  onClick={closeOffcanvas}
                >
                  About US{" "}
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-uppercase"
                  to="/our-clients"
                  onClick={closeOffcanvas}
                >
                  Our Clients
                </Link>
              </li>

              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-uppercase"
                  to="/our-services"
                  onClick={closeOffcanvas}
                >
                  Our Services
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-uppercase"
                  to="/our-team"
                  onClick={closeOffcanvas}
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item mb-3">
                <Link
                  className="nav-link text-uppercase"
                  to="/contact"
                  onClick={closeOffcanvas}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
