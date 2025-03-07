import PropTypes from "prop-types"
import StarActive from "../assets/star-active.svg"
import StarInactive from "../assets/star-inactive.svg"
const HouseRating = ({rating}) => {

    const range = [1, 2, 3, 4, 5]

  return (
    <div className="house-rating">
        {range.map((rangeElem) =>
            rating >= rangeElem ? 
            <img key={rangeElem.toString()} src = {StarActive} alt="star active" />
            : 
            <img key={rangeElem.toString()} src={StarInactive} alt="star inactive"/>
        )}
    </div>
  )
}

HouseRating.propTypes = {
    rating: PropTypes.string.isRequired,
}
export default HouseRating