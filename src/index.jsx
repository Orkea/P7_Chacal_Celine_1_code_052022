import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./styles/index.scss"

/** Importation des différentes routes */
import Home from "./pages/Home.jsx"
import A_Propos from "./pages/A_Propos.jsx"
import Fiche_logement from "./pages/Fiche_logement.jsx"
import Error from './pages/Error.jsx'

/** Importation des diférents composants */
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<A_Propos />} />
        <Route path="/fiche_logement/:id" element={<Fiche_logement />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)
