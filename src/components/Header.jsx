import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

/**
 * Composant Header - En-tête de l'application
 * 
 * - Inclut un logo et une barre de navigation
 * avec des liens vers les pages principales de l'application.
 * 
 */

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo"/>
      <nav className="header__navbar">
        <div className="header__accueil">
        <Link to="/" className="header__link">Accueil</Link>
        </div>
        <div className="header__a_propos"> 
        <Link to="a_propos" className="header__link"> A Propos</Link>
        </div>
      </nav>
    </div>
  )
}
export default Header
