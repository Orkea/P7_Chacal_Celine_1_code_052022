/** Composant Banner - Affiche une section englobante avec du contenu dynamique.
 *
 * - Utilise `children` pour insérer du contenu passé en tant que prop.
 * 
 */

// eslint-disable-next-line react/prop-types
const Banner = ({ children }) => {
  return <section className="maskgroup">{children}</section>
}
export default Banner
