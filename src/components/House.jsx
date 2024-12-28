import PropTypes from "prop-types"
const House = ({
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) => {
  console.log("Tableau de images", pictures)
  return (
    <div>
      <div className="carrousel">
        <img src={cover} alt={title} />
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
  cover: PropTypes.string,
  pictures: PropTypes.array,
  description: PropTypes.string.isRequired,
  host: PropTypes.string,
  rating: PropTypes.number,
  location: PropTypes.string.isRequired,
  equipments: PropTypes.array,
  tags: PropTypes.array,
}
export default House
