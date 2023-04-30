import React from "react";
import "./Dropdown.css"

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-button" onClick={this.toggleDropdown}>
          Fiabilité
          <img className={`dropdown-arrow ${this.state.open ? "open" : ""}`} src="/icone_dropdown.svg" alt="icone_dropdown" />
        </div>
        <ul
          className="dropdown-list"
          style={{ display: this.state.open ? "block" : "none" }}
        >
          <p className="dropdown-item">
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </ul>
      </div>
    );
  }
}

export default Dropdown;