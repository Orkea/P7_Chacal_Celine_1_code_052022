import { useState } from "react"
import PropTypes from "prop-types"
import VectorUp from "../assets/vector-up.png"
import VectorDown from "../assets/vector-down.png"


const Collapse = ({ element, title }) => {
  const [isOpen, updateIsOpen] = useState(false)
  console.log(element)
  return (
    <div className="dropdown dropdown--open">
      <div className="dropdown--close">
        <h3>{title}</h3>
        <button
          className="dropdown__button dropdown__button--up"
          onClick={() => updateIsOpen(!isOpen)}
        >
        {isOpen ? <img src={VectorUp} alt="Fleche vers le haut" /> : <img src={VectorDown} alt="Fleche vers le bas" />}
        </button>
      </div>
      
      {isOpen &&
        (Array.isArray(element) ? (
          <div className="dropdown--open__text">
          <ul>
            {element.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          </div>
        ) : (
          <div className="dropdown--open__text">
            <p>{element}</p>
          </div>
        ))}
    </div>
  )
}

Collapse.propTypes = {
  element: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default Collapse
