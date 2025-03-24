import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import House from "../components/House"
import Error from "./Error.jsx"

const Fiche_logement = () => {
  const { id } = useParams()
  const [houses, setHouses] = useState([])
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const res = await fetch(`http://localhost:5173/src/data/logements.json`)
        const houses = await res.json()

         /* On filter pour trouver les info du logement passer en useParams*/

        setHouses(houses)
      } catch (error) {
        console.log("Erreur fecthing data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchHouse()
  }, [])

  /* On filter pour trouver les info du logement passer en useParams */
  const house = houses.find((house) => house.id === id)

  /* Si house n'existe pas on affiche une page d'erreur */
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
      {isloading ? (
        <Loader loading={isloading} />
      ) : (
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
