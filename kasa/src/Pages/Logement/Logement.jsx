import data from "../../Data/dataLogement.json";
import Carousel from "../../Components/Carousel/Carousel";
import "./Logement.css";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import Dropdown from './../../Components/Dropdown/Dropdown';
import TagName from './../../Components/TagName/TagName';

function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Error />;

  const { title, description, pictures, equipments, tags } = logement;

  return (
    <main className="logement">
      <Carousel photos={pictures} />
      <TagName tags={tags} />
      <Dropdown title="Description" content = {description} page="logement"/>
      <Dropdown title="Equipements" content = {equipments} page="logement"/>
      
    </main>
  );
}

export default Logement;