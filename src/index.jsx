/** Importation de StrictMode de React  * - Permet d'activer des vérifications et avertissements supplémentaires en mode développement */
import { StrictMode } from "react"
/** Importation de createRoot * - Permet de créer une racine React optimisée pour le rendu concurrentiel */
import { createRoot } from "react-dom/client"

/** Importation Router, Route, Routes depuis react-router-dom 
 * - Router : Gère la navigation et les différentes pages de l'application
 * - Route : Définit un chemin spécifique et le composant à afficher
 * - Routes : Conteneur pour regrouper plusieurs <Route>
 */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

/** Importation des styles globaux de l'application */
import "./styles/index.scss"

/** Importation des différentes routes */
import Home from "./pages/Home.jsx"
import A_Propos from "./pages/A_Propos.jsx"
import Fiche_logement from "./pages/Fiche_logement.jsx"
import Error from './pages/Error.jsx'

/** Importation des composants globaux */
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche_logement/:id" element={<Fiche_logement />}/>
        <Route path="/a_propos" element={<A_Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  </StrictMode>
)
