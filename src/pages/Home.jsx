
import HousingList from "../components/HousingList"
import HomePicture from "../assets/Home-picture.png"

const Home = () => {
  return (
    <>
      <main className="main-container">
        <section className="picture">
          <h1 className="picture__text"> Chez vous, partout et ailleurs</h1>
          <img src={HomePicture} alt="Image de la page d'accueil" />
        </section>
          <HousingList />
      </main>
    </>
  )
}
export default Home
