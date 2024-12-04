import { useParams } from "react-router-dom"

const Fiche_logement = () => {
  const { id } = useParams()

  return <div> La Fiche_logement {id}</div>
}
export default Fiche_logement
