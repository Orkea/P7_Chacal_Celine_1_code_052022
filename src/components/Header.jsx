import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <nav className="header__navbar">
        <Link to="/" className="header__link">Accueil</Link>
        <Link to="a_propos" className="header__link"> A Propos</Link>
      </nav>
      <img src={logo} alt="logo" className="header__logo"/>
    </div>
  )
}
export default Header
