// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}
export default Home;