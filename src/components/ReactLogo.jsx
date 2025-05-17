import React from "react";
import "./ReactLogo.css";

export default function ReactLogo() {
  return (
      <svg
        className="react-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 320"
        width="300"    // dari 150 jadi 250
        height="300"   // dari 150 jadi 250
        fill="none"
        stroke="#61dafb"
        strokeWidth="10"
        >
        {/* isi sama */}


      <circle cx="128" cy="128" r="24" />
      <ellipse
        cx="128"
        cy="128"
        rx="88"
        ry="48"
        className="orbit orbit1"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="88"
        ry="48"
        transform="rotate(60 128 128)"
        className="orbit orbit2"
      />
      <ellipse
        cx="128"
        cy="128"
        rx="88"
        ry="48"
        transform="rotate(120 128 128)"
        className="orbit orbit3"
      />
      <circle cx="208" cy="128" r="12" className="electron electron1" />
      <circle cx="84" cy="70" r="12" className="electron electron2" />
      <circle cx="84" cy="186" r="12" className="electron electron3" />
    </svg>
  );
}
