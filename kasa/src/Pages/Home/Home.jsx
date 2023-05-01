import React from "react";
import Banner from "./../../Components/Banner/Banner";
import Card from "./../../Components/Card/Card";
import HomeData  from "../../Data/dataLogement.json";

import './Home.css';

function Home() {
  return (
    <main className="Home">
      <Banner txt="Chez vous, partout et ailleurs" page="home"/>
      <div className="home__container">
        {HomeData.map((homeData) => {
          return (
            <Card className="card" key={homeData.id} id={homeData.id} title = {homeData.title} cover = {homeData.cover} />
        );})}
        
      </div>
    </main>
  );
}
export default Home;