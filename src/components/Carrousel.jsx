import { useState } from "react"
import PropTypes from "prop-types"
import VectorBack from "../assets/vector-back.png"
import VectorForward from "../assets/vector-forward.png"

const Carrousel = ({ pictures, title }) => {
  const [indexPicture, setIndexPicture] = useState(0)
  const indexPreviousPicture =
    indexPicture === 0 ? pictures.length - 1 : indexPicture - 1
  const indexNextPicture =
    indexPicture === pictures.length - 1 ? 0 : indexPicture + 1
  const positionPicture = indexPicture + 1
  const IstotalPicture = pictures.length
  return (
    <div className="carrousel">
      <div className="carrousel__arrow">
        <button
          className="carrousel__vector"
          onClick={() => setIndexPicture(indexPreviousPicture)}
        >
          <img src={VectorBack} alt="Image précédente" />
        </button>
        <button
          className="carrousel__vector"
          onClick={() => setIndexPicture(indexNextPicture)}
        >
          <img src={VectorForward} alt="Image suivante" />
        </button>
      </div>
      <img
        className="carrousel__pictures"
        src={pictures[indexPicture]}
        alt={title}
      />
      {/* On affiche le numéro de la photo actuelle et le nombre total de photos s'il y a plus qu'une photo*/}

      {IstotalPicture > 1 ? (
        <p className="carrousel__pagination">
          {positionPicture + "/" + pictures.length}
        </p>
      ) : null}
    </div>
  )
}
Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array,
}
export default Carrousel
