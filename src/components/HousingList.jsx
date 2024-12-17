import { Link } from "react-router-dom"
import houses from "../data/logements.json"
const HousingList = () => {
  console.log(houses)
  return (
    <div className="gallery-container">
      {houses.map((house, index) => (
        <Link
          to={`/fiche_logement/${house.id}`}
          key={`${house}${index}`}
          className="gallery-container__link"
        >
          {house.title}
        </Link>
      ))}
    </div>
  )
}
export default HousingList
