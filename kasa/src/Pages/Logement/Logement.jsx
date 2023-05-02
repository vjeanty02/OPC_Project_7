import data from "../../Data/dataLogement.json";
import Carousel from "../../Components/Carousel/Carousel";
import "./Logement.css";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";
import Dropdown from './../../Components/Dropdown/Dropdown';
import TagName from './../../Components/TagName/TagName';
import Host from './../../Components/Host/Host';


function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  if (!logement) return <Error />;

  const { title, description, pictures, equipments, tags, location, host } = logement;

  return (
    <main className="logement">
      <Carousel photos={pictures} />
      <h1 className="logement__title">{title}</h1>
      <h2 className="logement__location">{location}</h2>
      <TagName tags={tags} />
      <Host name={host.name} picture={host.picture}/>
      <Dropdown title="Description" content = {description} page="logement"/>
      <Dropdown title="Equipements" content = {equipments} page="logement"/>
    </main>
  );
}

export default Logement;