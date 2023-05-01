import data from "../../Data/dataLogement.json";
import "./Logement.css";
import Error from "../Error/Error";

import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Error />;

  const { title, description, pictures, equipments } = logement;

  return (
    <div className="main">   
    </div>
  );
}

export default Logement;