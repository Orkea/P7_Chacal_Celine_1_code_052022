import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <div>Page d&apos;accueil 🏡</div>
      <Link to="/fiche_logement/1"> Card</Link>
    </>
  )
}
export default Home
