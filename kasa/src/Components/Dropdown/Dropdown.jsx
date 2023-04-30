import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={toggleDropdown}>
        Fiabilité
        <img
          className={`dropdown-arrow ${open ? "open" : ""}`}
          src="/icone_dropdown.svg"
          alt="icone_dropdown"
        />
      </div>
      <ul className="dropdown-list" style={{ display: open ? "block" : "none" }}>
        <p className="dropdown-item">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage entraînera
          une exclusion de notre plateforme.
        </p>
      </ul>
    </div>
  );
}

export default Dropdown;