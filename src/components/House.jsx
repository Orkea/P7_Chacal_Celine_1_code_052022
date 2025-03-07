import PropTypes from "prop-types"
import Carrousel from "./Carrousel"
import Collapse from "./Collapse"
import HouseRating from "./HouseRating"

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
  const identity = host.name.split(" ")
  const firstName = identity[0]
  const lastName = identity[1]

  return (
    <main className="house">
      <Carrousel pictures={pictures} title={title} />
      <div className="house__title">
        <h2>{title}</h2>
        <h3>{location}</h3>
      </div>
     
      <div className="house-content">
        <div className="house-content__tags">
          {tags.map((tag, index) => (
            <div key={`${tag}-${index}`} className="house-content__tags--item">
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <aside className="house-aside">
          <div className="house-aside__host">
            <p>
              {firstName} <br />
              {lastName}
            </p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="house-rating">
            <HouseRating rating={rating} />
          </div>
        </aside>
        <div className="house-content__collapse">
          <Collapse
            element={description}
            title="Description"
            className="dropdown"
          />
          <Collapse
            element={equipments}
            title="Equipements"
            className="dropdown"
          />
        </div>
      </div>
    </main>
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
