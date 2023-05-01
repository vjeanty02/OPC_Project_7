import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown__button" onClick={toggleDropdown}>
        {props.title}
        <img
          className={`dropdown__button__arrow ${open ? "open" : ""}`}
          src="/icone_dropdown.svg"
          alt="icone_dropdown"
        />
      </div>
      <ul className="dropdown__list" style={{ display: open ? "block" : "none" }}>
        <p className="dropdown__list__item">
        {props.description}
        </p>
      </ul>
    </div>
  );
}

export default Dropdown;