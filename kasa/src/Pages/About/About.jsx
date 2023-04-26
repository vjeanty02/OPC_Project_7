// About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}