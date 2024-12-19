import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Fiche_logement = () => {
  const { id } = useParams()
  // const [house, setHouse] = useState(null)
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
   
    const fetchHouse = async () => {
      try {
        const res = await fetch(`http://localhost:5173/src/data/logements.json`)
        const data = await res.json()
        console.log("DATA de la response",data)
      } catch (error) {
        console.log("Erreur fecthing data", error)
      } finally {
        console.log("DATA RECUPERER")
      }
    }
    fetchHouse()
  }, [])

  // useEffect(() => {

  //   fetch(`http://localhost:5173/src/data/logements`)
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
  

  return <div> La Fiche_logement {id}</div>
}
export default Fiche_logement
