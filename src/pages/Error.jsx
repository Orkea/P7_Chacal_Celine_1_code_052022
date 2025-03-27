import { Link } from "react-router-dom"

/**
 * Composant Error - Page d'erreur 404
 * 
 * - Affiché lorsque l'utilisateur tente d'accéder à une page qui n'existe pas.
 * 
 */
const Error = () => {
  return (
    <div className="error">
      <p className="error__404">404</p>
      <p className="error__text">Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
    </div>
  )
}
export default Error
