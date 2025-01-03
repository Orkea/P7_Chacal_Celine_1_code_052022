import { useState } from "react"
import PropTypes from "prop-types"
import VectorUp from "../assets/vector-up.png"
import VectorDown from "../assets/vector-down.png"


const Collapse = ({ element, name }) => {
  const [isOpen, updateIsOpen] = useState(true)
  console.log(element)
  return (
    <div className="dropdown dropdown--open">
      <div className="dropdown--close">
        <h3>{name}</h3>
        <button
          className="dropdown__button dropdown__button--up"
          onClick={() => updateIsOpen(!isOpen)}
        >
        {isOpen ? <img src={VectorUp} alt="Fleche vers le haut" /> : <img src={VectorDown} alt="Fleche vers le bas" />}
        </button>
      </div>
      {isOpen &&
        (Array.isArray(element) ? (
          <ul>
            {element.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{element}</p>
        ))}
    </div>
  )
}

Collapse.propTypes = {
  element: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default Collapse
