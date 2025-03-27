import { PropagateLoader } from "react-spinners"
import PropTypes from "prop-types"

/**
 * Composant Loader
 * 
 *  - Indicateur de chargement animé, indiquant à l'utilisateur 
 * qu'une opération est en cours de traitement
 * 
 */
const override = {
  display: "block",
  margin: "100px auto",
}
const Loader = ({ loading }) => {
  return (
    <PropagateLoader
  color="#ff6060"
  loading={loading}
  cssOverride={override} 
  size={50}
  speedMultiplier={2}
/>
  )
}
export default Loader

Loader.propTypes = {
  loading: PropTypes.bool,
}