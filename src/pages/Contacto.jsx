import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import {FaWhatsapp, FaEnvelope, FaFacebook, FaLinkedin, FaSquareInstagram} from 'react-icons/fa6'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Banner from "../components/Banner"
import Fondo from "../assets/images/contacto/fondo.jpg"
import Persona from "../assets/images/contacto/persona.png"
import PepeAlonso from "../assets/images/layout/letras.png" 

const Contacto = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Banner 
        
        fondo={Fondo} 

        idScroll={'seccion-contacto'}

        titulo={'Tu felicidad es nuestro compromiso'}
        
        subtitulo={'Te garantizamos una experiencia satisfactoría y sin complicaciones'} />


      <section id="seccion-contacto" className="contacto">

        <form className="contacto__form">
        
        <header data-aos="fade-right" className="contacto__header">

          <h2 className="contacto__titulo">Contactanos</h2>

          <p className="contacto__subtitulo">Estamos listos para atender todas tus dudas y comentarios</p>

        </header>

        <section className="contacto__inputs">

          <input data-aos="zoom-out-left" className="contacto__input" type="text" id="nombre" name="nombre" placeholder="Nombre" />
 
          <input data-aos="zoom-out-right" className="contacto__input" type="email" id="correo" name="correo" placeholder="Correo" />
 
          <input data-aos="zoom-out-left" className="contacto__input" type="tel" id="whatsapp" name="whatsapp" placeholder="WhatsApp" />

          <textarea data-aos="zoom-out-right" className="contacto__textarea" name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>

          <button data-aos="zoom-out" className="contacto__enviar" type="submit" id="enviar">Enviar</button>

        </section>


        </form>

        <img data-aos="flip-left" data-delay="2s" className="contacto__fotografia" src={Persona} alt="Fotografía de Pepe Alonso" />
      
      </section>


      <section className="contacto__redes">

        <Link data-aos="zoom-in" className='contacto__redes__item' to={''}><FaWhatsapp className='contacto__redes__icon' /> (33) 1600 5123</Link>

        <Link data-aos="zoom-in" className='contacto__redes__item' to={''}><FaEnvelope className='contacto__redes__icon' /> luisalonsoasesorsolido@gmail.com</Link>

        <div className='contacto__redes__others'>

          <Link data-aos="zoom-in" className='contacto__redes__item' to={''}><FaFacebook className='contacto__redes__icon' /></Link>

          <Link data-aos="zoom-in" className='contacto__redes__item' to={''}><FaSquareInstagram className='contacto__redes__icon' /></Link>
          
          <Link data-aos="zoom-in" className='contacto__redes__item' to={''}><FaLinkedin className='contacto__redes__icon' /></Link>

        </div>

      </section>


      <img data-aos="zoom-in-left" className='contacto__letras' src={PepeAlonso} alt="Letras de Pepe Alonso" />

    </>
  )
}

export default Contacto
