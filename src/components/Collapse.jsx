import { useState } from "react"
import PropTypes from "prop-types"
import VectorDown from "../assets/vector-down.png"

/**
 * Composant Collapse
 * 
 * - Section repliable (dropdown) qui peut être ouverte ou fermée.
 * - Affiche du contenu conditionnellement, comme une liste ou un texte, 
 * en cliquant sur le bouton associé.
 * 
 */

const Collapse = ({ element, title, className }) => {
  /** État local pour suivre l'état d'ouverture du composant */
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`${className} ${isOpen ? "open" : ""}`}>
      {/** En-tête du composant comprenant le titre et le bouton de bascule */}
      <div className="dropdown__close">
        <h3>{title}</h3>
        <button
          className={`dropdown__button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={VectorDown} alt="Fleche vers le bas" />
            
        </button>
      </div>
      <div className="dropdown__text">
        {/** Si `element` est un tableau, on l'affiche sous forme de liste, si non sous forme de paragraphe */}
        {(Array.isArray(element) ? (
            <ul>
              {element.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{element}</p>
          ))}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  element: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}
export default Collapse
