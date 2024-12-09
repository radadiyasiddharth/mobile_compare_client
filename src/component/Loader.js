import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-letter">D</div>
        <div className="loader-letter">E</div>
        <div className="loader-letter">V</div>
        <div className="loader-letter">I</div>
        <div className="loader-letter">C</div>
        <div className="loader-letter">E</div>
        <div className="loader-letter blank"></div>
        <div className="loader-letter">D</div>
        <div className="loader-letter">E</div>
        <div className="loader-letter">C</div>
        <div className="loader-letter">I</div>
        <div className="loader-letter">D</div>
        <div className="loader-letter">E</div>
        <div className="loader-letter">R</div>
      </div>
    </div>
  );
}

export default Loader;
