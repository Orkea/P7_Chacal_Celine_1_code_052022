import PropTypes from "prop-types"
import{ useState } from "react"
import VectorBack from "../assets/vector-back.png"
import VectorForward from "../assets/vector-forward.png"


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
  
  const [indexPicture, updateIndexPicture] = useState(0)
  console.log("====== Index de l'image ======", indexPicture + "  ======= Image actuelle ======", pictures[indexPicture])
  const indexPreviousPicture = indexPicture === 0 ? (pictures.length-1) : indexPicture - 1 
  console.log("===Image PRECEDENTE ====", pictures[indexPreviousPicture])
  const indexNextPicture = indexPicture === (pictures.length-1) ? 0 : indexPicture + 1
  console.log("===Image suivante ====", pictures[indexNextPicture])
  return (
    <div>
      <div className="carrousel">
        <div className="carrousel__arrow carrousel__arrow--back">
          <button className="carousel__vector"  onClick={() => updateIndexPicture(indexPreviousPicture)}>
            <img src={VectorBack} alt="Image précédente" />
          </button>
        </div>
        <div className="carrousel__arrow carrousel__arrow--foward">
          <button className="carousel__vector" onClick={() => updateIndexPicture(indexNextPicture)}>
            <img src={VectorForward} alt="Image suivante" />
          </button>
        </div>

        <img className="carrousel__pictures" src={pictures[indexPicture]} alt={title} />

      </div>
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
      <div className="house-description dropdown-open">
        <h3>Description</h3>
        {description}
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
