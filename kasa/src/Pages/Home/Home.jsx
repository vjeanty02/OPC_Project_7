// Home.jsx
import React from "react";
import Banner from "./../../Components/Banner/Banner";
import Card from "./../../Components/Card/Card";
import LogementData  from "../../Data/dataLogement.json";

import './Home.css';

function Home() {
  return (
    <main className="Home">
      <Banner txt="Chez vous, partout et ailleurs" page="home"/>
      <div className="home__container">
        {LogementData.map((logementData) => {
          return (
            <Card className="card" key={logementData.id} title = {logementData.title} cover = {logementData.cover} />
        );})}
        
      </div>
    </main>
  );
}
export default Home;