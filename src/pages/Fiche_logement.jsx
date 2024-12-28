import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../components/Loader" /* chemin à verifier*/

const Fiche_logement = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const res = await fetch(`http://localhost:5173/src/data/logements.json`)
        const houseData = await res.json()
        /* On filter pour trouver les info du logement passer en id*/
        const filteredData = houseData.find((item) => item.id === id)
        console.log("affichage du contenu de DATA", data)
        console.log("DATA de la response de l'API", houseData)
        console.log("DATA pour un logement", filteredData)
        setData(filteredData)
      } catch (error) {
        console.log("Erreur fecthing data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchHouse()
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // useEffect(() => {

  //   fetch(`http://localhost:5173/src/data/logements.json`)
  //     .then((response) => {
  //       console.log("Statut de la réponse :", response.status);
  //       console.log("RESPONSE JSON", response.json())
  //       return response.text(); // Changez temporairement en .text() pour voir la réponse brute
  //     })
  //     .then((data) => {
  //       console.log("REPONSE BRUTE:", data);
  //     })
  //     .catch((error) => console.log("Erreur :", error));
  // }, []);

  return <div>{isloading ? <Loader /> : <div>La Fiche_logement {id}</div>}</div>
}
export default Fiche_logement
