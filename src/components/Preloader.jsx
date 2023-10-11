import Logo from '../assets/images/layout/logo.png'
import '../styles/index.css'

const Preloader = () => {
  return (
    <div className="preloader">
        <img className='preloader__logo' src={Logo} alt="Logotipo de Pepe Alonzo" />
    </div>
  )
}

export default Preloader