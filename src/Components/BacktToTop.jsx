import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-to-top ${
        visible ? "show" : ""
      } d-flex align-items-center justify-content-center banner position-fixed back-light  z-3`}
      onClick={scrollToTop}
    >
      <i className="bi bi-chevron-up text-white fs-4"></i>
    </div>
  );
};

export default BackToTop;
