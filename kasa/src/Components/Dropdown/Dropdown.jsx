import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown-button" onClick={toggleDropdown}>
        {props.title}
        <img
          className={`dropdown-arrow ${open ? "open" : ""}`}
          src="/icone_dropdown.svg"
          alt="icone_dropdown"
        />
      </div>
      <ul className="dropdown-list" style={{ display: open ? "block" : "none" }}>
        <p className="dropdown-item">
        {props.description}
        </p>
      </ul>
    </div>
  );
}

export default Dropdown;