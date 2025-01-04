import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.scrollY > 300) {
      setIsVisible(true);
    } else if (isVisible && window.scrollY <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [isVisible]);

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    )
  );
};

export default BackToTopButton;
