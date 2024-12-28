import { Link } from "react-router-dom"
import houses from "../data/logements.json"


const HousingList = () => {
  return (
    <div className="gallery">
      {houses.map((house, index) => (
        <Link to={`/fiche_logement/${house.id}`} key={`${house}${index}`} className="gallery__link">
          <div className="gallery-card">
            <img src={house.cover} alt={house.title} className="gallery-card__img"/>
            <p className="gallery-card__title">{house.title}</p>
            
          </div>
        </Link>
      ))}
    </div>
  )
}
export default HousingList
