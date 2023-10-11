import FlechaDerecha from "../assets/images/layout/flecha-derecha.png"
import FlechaIzquierda from "../assets/images/layout/flecha-izquierda.png"
import FlechaNext from '../assets/images/main/flecha-derecha-dark.png'
import FlechaPrev from '../assets/images/main/flecha-izquierda-dark.png'

const BotonesCarrusel = ({mainMode}) => {

  return (

    <div className="flechas__carrusel">
    
        <div className={`flechas__flecha ${mainMode ? 'main' : ''} flechas__prev`}>
    
            <img src={mainMode ? FlechaPrev : FlechaIzquierda} alt="Flecha para retroceder" />
    
        </div>
    
        <div className={`flechas__flecha ${mainMode ? 'main' : ''} flechas__next`}>
    
            <img src={mainMode ? FlechaNext :FlechaDerecha} alt="Flecha para avanzar" />
    
        </div>
    
    </div>
  
  )
}

export default BotonesCarrusel