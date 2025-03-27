import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
// import houses from "../data/logements.json"

/** Composant HousingList 
 * 
 * - Affiche une galerie de logements sous forme de cartes cliquables.
 * 
 */

const HousingList = () => {
 // State pour stocker les logements récupérés
 const [houses, setHouses] = useState([])

 useEffect(() => {
  /** fonction asynchrone pour récupérer les données des logements */
  const fetchHouse = async () => {
    try {
      /** Appel pour récupérer les logements à partir du fichier JSON local */
      const res = await fetch('/data/logements.json')
      /** '/data/logements.json'  _  http://localhost:5173/src/data/logements.json */
      const houses = await res.json()
      /** Mise à jour de l'état avec les données récupérées */
      setHouses(houses)
    } 
    catch (error) {
      /** Gestion des erreurs si l'appel échoue */
      console.log("Erreur fecthing data", error)
    } 
  
  }
  /** Appel de la fonction pour charger les données */
  fetchHouse()
}, [])
  return (
    <div className="gallery">
      <div className="gallery__container">
        {/* Parcours du tableau des logements et affichage sous forme de cartes */}
      {houses.map((house) => (
        /* Redirection vers la page de détails du logement */
        <Link to={`/fiche_logement/${house.id}`} key={`${house.id}`} className="gallery__link">
          <div className="gallery-card">
            <img src={house.cover} alt={house.title} className="gallery-card__img"/>
            <p className="gallery-card__title">{house.title}</p>
          </div>
        </Link>
      ))}

      </div>
    </div>
  )
}
export default HousingList
