import PropTypes from "prop-types"
import StarActive from "../assets/star-active.svg"
import StarInactive from "../assets/star-inactive.svg"

/** Composant fonctionnel HouseRating 
 * 
 *  - Affiche la notation d'une maison sous forme d'étoiles actives et inactives 
 * en fonction du `rating` (note)
 * 
 */
const HouseRating = ({rating}) => {

   /** Tableau `range` contenant les différentes positions pour  les étoiles */
    const range = [1, 2, 3, 4, 5]

  return (
    <div className="house-rating">
      {/**  Vérifie si le `rating `(note) est supérieur ou égal à l'élément courant (rangeElem) pour chaque etoiles */}
        {range.map((rangeElem) =>
            rating >= rangeElem ? 
            /** Si vrai - afficher une étoile active */
            <img key={rangeElem.toString()} src = {StarActive} alt="star active" />
            : 
            /** Sinon - afficher une étoile active */
            <img key={rangeElem.toString()} src={StarInactive} alt="star inactive"/>
        )}
    </div>
  )
}

HouseRating.propTypes = {
    rating: PropTypes.string.isRequired,
}
export default HouseRating