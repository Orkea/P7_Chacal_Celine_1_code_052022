import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <div className="home-container">Page d&apos;accueil 🏡</div>
      <Link to="/fiche_logement/1" className="card-container"> Card</Link>
    </>
  )
}
export default Home
