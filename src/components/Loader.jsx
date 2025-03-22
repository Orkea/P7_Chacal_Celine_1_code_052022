import { PropagateLoader } from "react-spinners"
import PropTypes from "prop-types"

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
  speedMultiplier={4}
/>
  )
}
export default Loader

Loader.propTypes = {
  loading: PropTypes.bool,
}