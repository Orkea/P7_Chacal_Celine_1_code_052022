import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Fiche_logement = () => {
  const { id } = useParams()
  const [houseData, setData] = useState(null);
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
   
    const fetchHouse = async () => {
      try {
        const res = await fetch(`http://localhost:5173/src/data/logements.json`)
        const houseData = await res.json()
         const filteredData = houseData.find((item) => item.id === parseInt(id));
        console.log("DATA de la response", houseData)
        console.log("DATA pour un logement", filteredData)
       setData(filteredData);
      } catch (error) {
        console.log("Erreur fecthing data", error)
      } finally {
        console.log("DATA RECUPERER")
        // setLoading(false)
      }
    }
    fetchHouse()
  }, [id])

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
