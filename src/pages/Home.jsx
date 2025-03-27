import HousingList from "../components/HousingList"
import Banner from "../components/Banner"
import HomePicture from "../assets/Home-picture.png"

/** Page d'accueil du site.*/

const Home = () => {
  return (
    <main className="main-container">
      {/* Bannière d'accueil avec un texte et une image */}
      <Banner>
        <div className="banner__text">
          <h1> Chez vous, partout et ailleurs</h1>
        </div>
        <img
          src={HomePicture}
          alt="Image de la page d'accueil"
          className="banner__img"
        />
      </Banner>
      {/* Affichage de la liste des logements */}
      <HousingList />
    </main>
  )
}
export default Home
