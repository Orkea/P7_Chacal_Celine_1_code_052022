import { Link } from "react-router-dom"
import LogoGroup from "./Logo.jsx"

const Header = () => {
  return (
    <div className="header-container">
      <LogoGroup/>
      <nav className="header-container__navbar">
        <Link to="/" className="header-container__link">Accueil</Link>
        <Link to="a_propos" className="header-container__link"> A Propos</Link>
      </nav>
    </div>
  )
}
export default Header
