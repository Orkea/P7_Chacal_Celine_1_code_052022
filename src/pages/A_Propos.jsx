import Collapse from "../components/Collapse"
import Banner from "../components/Banner"
import AProposPicture from "../assets/A_Propos-picture.png"
import ApTheme from "../data/a_propos.json"

const A_Propos = () => {
  return (
    <div className="A-propos">
      <Banner>
        <img src={AProposPicture} className="banner__img" />
      </Banner>
      <div className="dropdownlarge">
        {ApTheme.map((item, index) => (
          <div key={`${item}-${index}`}>
            <Collapse element={item.text} title={item.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default A_Propos
