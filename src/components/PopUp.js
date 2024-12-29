import React, { useState, useEffect } from "react";
import "../styles/PopUp.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Show the popup when the website loads
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Welcome to My Portfolio</h2>
            <p>
              Explore my projects and work. For the best experience, please use
              a web browser.
            </p>
            <button onClick={handleClose} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
