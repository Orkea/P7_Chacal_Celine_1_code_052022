import HousingList from "../components/HousingList"
import Banner from "../components/Banner"
import HomePicture from "../assets/Home-picture.png"

const Home = () => {
  return (
      <main className="main-container">
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
        <HousingList />
      </main>
  )
}
export default Home
