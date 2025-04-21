import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <>
      <div>
        <h1 className="title-nosotros">¿Quienes Somos?</h1>

        <hr />
        <h2 className="sub-title">EMPRESA</h2>

        <p className="parrafos-nos">
          <b>Mega Sports</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ullam nemo facere animi aspernatur nulla! <b>Mega Sports</b> Lorem ipsum, dolor sit amet consectetur adipisicing.       
        </p>

        <h2 className="sub-title">¿QUE MARCAS COMERCIALIZAMOS?</h2>

        <p className="parrafos-nos">Trabajamos con:</p>

        <div className="img-png">
          <img className="img-edit" src="/imgs/logo-adidas.webp" alt="marca adidas" />
          <img className="img-edit" src="/imgs/logo-nike1.png" alt="marca nike" />
          <img className="img-edit" src="/imgs/logo-puma.jpg" alt="marca puma" />
          <img className="img-edit" src="/imgs/newbalance-logo.jpg" alt="marca new balance" />
          <img className="img-edit" src="/imgs/logo-joma.webp" alt="marca joma" />
          <img className="img-edit" src="/imgs/logo-topper.png" alt="marca topper" />
          <img className="img-edit" src="/imgs/logo-under.png" alt="marca under armour" />
        </div>

        <h2 className="sub-title">ENCONTRANOS EN</h2>
        <p className="parrafos-nos">Ubicación</p>

      </div>
      <div className="mapa">
        <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52277.79493168182!2d-58.46708071265749!3d-35.02266814820809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2da71a3b65fd%3A0x4caffd42940be4c5!2sSan%20Vicente%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1745191085141!5m2!1ses!2sar" ></iframe>
      </div>
    </>
  )
}

export default Nosotros