import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import House from "../components/House"

const Fiche_logement = () => {
  const { id } = useParams()
  const [houses, setHouses] = useState([])
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const res = await fetch(`http://localhost:5173/src/data/logements.json`)
        const houses = await res.json()

        console.log("DATA de la response de l'API  ____Stocker dans HOUSES", houses)
        // /* On filter pour trouver les info du logement passer en useParams*/
        // const filteredData = housesData.find((house) => house.id === id)
        // 
        setHouses(houses)
      } catch (error) {
        console.log("Erreur fecthing data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchHouse()
  },[])

  // On filter pour trouver les info du logement passer en useParams
  const house = houses.find((house) => house.id === id)
  console.log("DATA pour un logement", house)
  return (
    
    <>
    {isloading ? <Loader /> : 
  
     <div>
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
    </div>
    }
    </>
    
  )
}
export default Fiche_logement
