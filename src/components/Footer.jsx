import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-content__contenedor">
          <img src="imgs/banelco-logo.png" alt="" className="footer-content__payments" />
          <img src="imgs/visa-logo.jpg" alt="logo de visa" className="footer-content__payments" />
          <img src="imgs/Mastercard-logo.png" alt="logo de mastercard" className="footer-content__payments" />
          <img src="imgs/american-express-card.png" alt="logo de amex" className="footer-content__payments" />
          <img src="imgs/Red-link-logo.png" alt="logo de red link" className="footer-content__payments" />
        </div>

        <div className="footer-content__copyright">

          <p className="footer-content__parrafo">© 2025 Mega Sports. Todos los derechos reservados</p>

        </div>

      </div>
    </footer>
  )
}

export default Footer