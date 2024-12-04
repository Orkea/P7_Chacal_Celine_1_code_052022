import {Link} from 'react-router-dom'
const Header = () => {
  return <>
  <div>Le header</div>
  <Link to="/">Accueil</Link>
  <Link to='a_propos'> A Propos</Link>
  </>
  
}
export default Header
