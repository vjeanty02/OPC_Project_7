// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Banner from "./../../Components/Banner/Banner";
import Card from "./../../Components/Card/Card";

function Home() {
  return (
    <main className="Home">
      <Banner/>
      <div className="Container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  );
}
export default Home;