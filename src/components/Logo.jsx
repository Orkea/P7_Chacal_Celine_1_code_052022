import House from "../assets/Group-Vector-1.png"
import Door from "../assets/Group-Vector-2.png"

const logo = () => {
  return (
    <div className="logo">
      <div className="logo__kcontainer">
        <span className="logo__kvector">K</span>
      </div>
      <div className="logo__grouphouse">
        <img src={House} alt="logo-house-icon" className="logo__grouphouse--house-icon"/>
        <img src={Door} alt="logo-door-icon" className="logo__grouphouse--door-icon" />
      </div>
      <div className="logo__sacontainer">
        <div className="logo__sacontainer--text" >sa</div>
        </div>
    </div>
  )
}
export default logo
