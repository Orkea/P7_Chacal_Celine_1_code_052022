import logo from "../assets/logo-blanc.svg"

const Footer = () => {
  return (
    <>
      <footer>
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__text">© 2020 Kasa. All rights reserved</div>
      </footer>
    </>
  )
}
export default Footer
