import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import House from "../components/House"
import Error from "./Error.jsx"

/** Page Fiche_logement 
 * 
 * - Affiche les détails d'un logement spécifique. 
 * 
 * */

const Fiche_logement = () => {
  // Extraction de l'ID du logement depuis l'URL
  const { id } = useParams()
  // State pour stocker les logements récupérés
  const [houses, setHouses] = useState([])
  // State pour gérer l'indicateur de chargement
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    /** fonction asynchrone pour récupérer les données des logements */
    const fetchHouse = async () => {
      try {
        /** Appel pour récupérer les logements à partir du fichier JSON local */
        const res = await fetch('/data/logements.json')
        
        const houses = await res.json()
        /** Mise à jour de l'état avec les données récupérées */
        setHouses(houses)
      } 
      catch (error) {
        /** Gestion des erreurs si l'appel échoue */
        console.log("Erreur fecthing data", error)
      } 
      finally {
        /** Arrêt du chargement, l'état `isloading` passe à false */
        setLoading(false)
      }
    }
    /** Appel de la fonction pour charger les données */
    fetchHouse()
  }, [])

  /* On filter pour trouver les info du logement passer en useParams */
  const house = houses.find((house) => house.id === id)

  /* Si house n'existe pas et que le chargement est terminé, on affiche la page d'erreur */
  if (!house && !isloading) {
    return (
      <div>
        <Error />
      </div>
    )
  }
  else
  return (
    <>
    {/* Affichage du loader pendant le chargement des données */}
      {isloading ? (
        <Loader loading={isloading} />
      ) : (
        // Si le logement est trouvé, afficher les détails dans le composant House
        <House
          title={house.title}
          cover={house.cover}
          pictures={house.pictures}
          description={house.description}
          host={house.host}
          rating={house.rating}
          location={house.location}
          equipments={house.equipments}
          tags={house.tags}
        />
      )}
    </>
  )
}
export default Fiche_logement
