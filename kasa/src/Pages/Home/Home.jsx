// Home.jsx
import React from "react";
import Banner from "./../../Components/Banner/Banner";
import Card from "./../../Components/Card/Card";
import './Home.css';

function Home() {
  return (
    <main className="Home">
      <Banner txt="Chez vous, partout et ailleurs" page="home"/>
      <div className="home__container">
        <Card className="card"/>
        <Card className="card"/>
        <Card className="card"/>
        <Card className="card"/>
        <Card className="card"/>
        <Card className="card"/>
      </div>
    </main>
  );
}
export default Home;