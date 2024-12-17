import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"

const Fiche_logement = () => {
  const { id } = useParams()
  // const [house, setHouse] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)
  //   const fetchHouse = async () => {
  //     try {
  //       const res = await fetch(`http://localhost:5173/data/logements`)
  //       const data = await res.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.log("Erreur fecthing data", error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchHouse()
  // }, [])

  // useEffect(()=>{
  //   fetch(`http://localhost:5173/data/logements`)
  //   .then((response) => response.json()
  //   .then(({ Data }) => console.log(Data))
  //   .catch((error) => console.log(error))
  // )
  // }, [])

  return <div> La Fiche_logement {id}</div>
}
export default Fiche_logement
