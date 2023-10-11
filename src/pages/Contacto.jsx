import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {FaWhatsapp, FaEnvelope, FaFacebook, FaLinkedin, FaSquareInstagram} from 'react-icons/fa6'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Banner from "../components/Banner"
import Fondo from "../assets/images/contacto/fondo.jpg"
import Persona from "../assets/images/contacto/persona.png"
import PepeAlonso from "../assets/images/layout/letras.png"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contacto = () => {

  const [isValid, setIsValid] = useState({
    nombre: false,
    correo: false,
    whatsapp: false,
    mensaje: false
  })

  const Alert = withReactContent(Swal)

  const handleChange = (event) => {
    const isValidCopy = {...isValid}
    const {value, name} = event.target
    const regExp = {
      nombre: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s']{2,}$/,
      correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      whatsapp: /^(\(?\d{3}\)?[-.\s]?)?(\d{3}[-.\s]?)?\d{4}$/,
      mensaje: /^[a-zA-Z0-9\s.,!?¿¡():;"'\-\n]*$/
    }

    const expSelect = regExp[name]

    if(!expSelect.test(value)){
      isValidCopy[name] = false
      setIsValid(isValidCopy)
      return Alert.fire({
        title: 'Alerta',
        text: `Los valores introducidos en el campo ${name} no son validos.`,
        icon: 'warning'
      })
    }

    isValidCopy[name] = true
    setIsValid(isValidCopy)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let url = `${import.meta.env.VITE_URL}controllers/mailer.php`

    const formData = new FormData(event.target)

    const mail = async() => {
      const respuesta = await fetch(url, {
        method: "POST",
        body: formData
      })

      const resultado = await respuesta.json()

      if(resultado.respuesta){

        return Alert.fire({
          title: "¡Listo!",
          icon: "success"
        })

      }else{

        return Alert.fire({
          title: "¡Error!",
          icon: "error"
        })

      }

    }

    if(isValid.nombre && isValid.correo && isValid.whatsapp && isValid.mensaje){
      mail()
    }else{
      return Alert.fire({
        title: "Oopss",
        text: "Los campos no estan validados o completados",
        icon: "warning"
      })
    }

  }

  useEffect(() => {
    AOS.init();
  }, [])
  
  const linkWhatsapp = import.meta.env.VITE_URL_WHATSAPP
  const linkFacebook = import.meta.env.VITE_URL_FACEBOOK
  const linkInstagram = import.meta.env.VITE_URL_INSTAGRAM
  const linkLinkedin = import.meta.env.VITE_URL_LINKEDIN
  const CorreoElectronico = import.meta.env.VITE_CORREO

  return (
    <>
      <Banner 
        
        fondo={Fondo} 

        idScroll={'seccion-contacto'}

        titulo={'Tu felicidad es nuestro compromiso'}
        
        subtitulo={'Te garantizamos una experiencia satisfactoria y sin complicaciones'} />


      <section data-aos="zoom-out" id="seccion-contacto" className="contacto">

        <form onSubmit={handleSubmit} className="contacto__form">
        
        <header data-aos="fade-right" className="contacto__header">

          <h2 className="contacto__titulo">Contáctanos</h2>

          <p className="contacto__subtitulo">Estamos listos para atender todas tus dudas y comentarios</p>

        </header>

        <section className="contacto__inputs">

          <input onBlur={handleChange} data-aos="zoom-out-left" className="contacto__input" type="text" id="nombre" name="nombre" placeholder="Nombre" />
 
          <input onBlur={handleChange} data-aos="zoom-out-right" className="contacto__input" type="email" id="correo" name="correo" placeholder="Correo" />
 
          <input onBlur={handleChange} data-aos="zoom-out-left" className="contacto__input" type="tel" id="whatsapp" name="whatsapp" placeholder="WhatsApp" />

          <textarea onBlur={handleChange} data-aos="zoom-out-right" className="contacto__textarea" name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>

          <button data-aos="zoom-out" className="contacto__enviar" type="submit" id="enviar">Enviar</button>

        </section>


        </form>

        <img data-aos="flip-left" data-delay="2s" className="contacto__fotografia" src={Persona} alt="Fotografía de Pepe Alonso" />
      
      </section>


      <section className="contacto__redes">

        <Link data-aos="zoom-in" className='contacto__redes__item' to={linkWhatsapp} target='_blank'><FaWhatsapp className='contacto__redes__icon' /> (33) 1600 5123</Link>

        <Link data-aos="zoom-in" className='contacto__redes__item contacto__redes__item--mail' target='_blank' to={'mailto:'+CorreoElectronico}><FaEnvelope className='contacto__redes__icon' /> rivieramayainvestments<br/>@pepealonsorealtor.com</Link>

        <div className='contacto__redes__others'>

          <Link data-aos="zoom-in" className='contacto__redes__item' to={linkFacebook}><FaFacebook className='contacto__redes__icon' /></Link>

          <Link data-aos="zoom-in" className='contacto__redes__item' to={linkInstagram}><FaSquareInstagram className='contacto__redes__icon' /></Link>
          
          <Link data-aos="zoom-in" className='contacto__redes__item' to={linkLinkedin}><FaLinkedin className='contacto__redes__icon' /></Link>

        </div>

      </section>


      <img data-aos="zoom-in-left" className='contacto__letras' loading='lazy' src={PepeAlonso} alt="Letras de Pepe Alonso" />

    </>
  )
}

export default Contacto
