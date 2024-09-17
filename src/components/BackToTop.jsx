import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Event listener for scroll
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-4 right-4 bg-[#FF4C38] text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 z-50"
          onClick={scrollToTop}
        >
          ↑ Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTop;
