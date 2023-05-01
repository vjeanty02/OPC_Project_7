import React from "react";
import Banner from '../../Components/Banner/Banner';
import Dropdown from '../../Components/Dropdown/Dropdown';
import LogementData  from "../../Data/dataAbout.json";
import "./Logement.css"

export default function Logement() {
  return (
    <main className="logement">
      <Banner txt="tt" page="about"/>
    </main>
  );
}