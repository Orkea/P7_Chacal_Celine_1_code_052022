import PropTypes from "prop-types"
import { useState } from "react"

import VectorUp from "../assets/vector-up.png"
import Carrousel from "./Carrousel"

const House = ({
  title,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) => {

  const[isDescriptionShow, updateIsDescriptionShow] = useState(true)

  return (
    <div>
      <Carrousel pictures={pictures} title={title} />
      <h2 className="house-title">{title}</h2>
      <h3 className="house-location">{location}</h3>
      <div className="house__content">
        <div className="house-tags">
          <h3>Tags</h3>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
          <div className="house-rating">
            <h3>Rating</h3>
            <span>{rating}/5</span>
          </div>
        </div>
        <div className="house-host">
          <h3>Host</h3>
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
      </div>
      <div className="dropdown dropdown--open">
        <div className="dropdown--close">
        <h3>Description</h3>
        <button className="dropdown__button dropdown__button--up" onClick={() => updateIsDescriptionShow(!isDescriptionShow)}>
          <img src={VectorUp} alt="Fleche vers le haut" />
        </button>
        </div>
        {isDescriptionShow && <p >{description}</p>}
      </div>

      <div className="house-equipments">
        <h3>Equipements</h3>
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
House.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array,
  description: PropTypes.string.isRequired,
  host: PropTypes.object,
  rating: PropTypes.string,
  location: PropTypes.string.isRequired,
  equipments: PropTypes.array,
  tags: PropTypes.array,
}
export default House
