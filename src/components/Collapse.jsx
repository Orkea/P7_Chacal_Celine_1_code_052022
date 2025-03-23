import { useState } from "react"
import PropTypes from "prop-types"
import VectorDown from "../assets/vector-down.png"

const Collapse = ({ element, title, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`${className} ${isOpen ? "open" : ""}`}
    >
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
