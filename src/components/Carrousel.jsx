import { useState } from "react"
import PropTypes from "prop-types"
import VectorBack from "../assets/vector-back.png"
import VectorForward from "../assets/vector-forward.png"

const Carrousel = ({ pictures, title }) => {
  const [indexPicture, updateIndexPicture] = useState(0)
  const indexPreviousPicture =
    indexPicture === 0 ? pictures.length - 1 : indexPicture - 1
  const indexNextPicture =
    indexPicture === pictures.length - 1 ? 0 : indexPicture + 1
  const positionPicture = indexPicture + 1
  const totalPictures = pictures.length  
  return (
    <div>
      <div className="carrousel">
        <div className="carrousel__arrow carrousel__arrow--back">
          <button
            className="carrousel__vector"
            onClick={() => updateIndexPicture(indexPreviousPicture)}
          >
            <img src={VectorBack} alt="Image précédente" />
          </button>
        </div>
        <div className="carrousel__arrow carrousel__arrow--foward">
          <button
            className="carrousel__vector"
            onClick={() => updateIndexPicture(indexNextPicture)}
          >
            <img src={VectorForward} alt="Image suivante" />
          </button>
        </div>
        
        <img
          className="carrousel__pictures"
          src={pictures[indexPicture]}
          alt={title}
        />
       {/* Ici, on affiche le numéro de la photo actuelle et le nombre total de photos */} 
        <p className="carrousel__pagination">{positionPicture + "/" + totalPictures}</p>
      </div>
    </div>
  )
}
Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array,
}
export default Carrousel
