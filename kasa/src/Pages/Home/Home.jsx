// Home.jsx
import React from "react";
import Banner from "./../../Components/Banner/Banner";
import Card from "./../../Components/Card/Card";

function Home() {
  return (
    <main className="Home">
      <Banner txt="Chez vous, partout et ailleurs"/>
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