import {Outlet, Link, NavLink} from 'react-router-dom'
import { Parallax } from 'react-parallax'

import React, {useState} from 'react'
import {FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope, FaXmark, FaBars, FaLinkedinIn, FaRegCopyright} from 'react-icons/fa6'

import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/index.css'

// Importacion de imagenes
import LogoImage from '../assets/images/layout/logo.png'
import LogoFull from '../assets/images/layout/logotipo.png'
import Background from '../assets/images/layout/fondo.jpg'

const Layout = () => {

  const [openMenu ,setOpenMenu] = useState(false)

  const handlerShowMenu = () => {
    setOpenMenu(true);
  }
  const handlerCloseMenu = () => {
    setOpenMenu(false);
  }

  const linkWhats = "https://wa.link/59tbk0"
  const correoElectronico = "luisdaniel.fdk@gmail.com"
  const linkFacebook = "";
  const linkInstagram = "";
  const linkLinkedin = "";

  return (
    <>
      <section className='navbar'>
          
          <img data-aos="zoom-out-right" className='navbar__logo' src={LogoImage} alt="Logo de Pepe Alonso" />
          
          <nav className={(openMenu ? 'navbar__enlaces active' : 'navbar__enlaces')}>
            
            <NavLink data-aos="zoom-out" onClick={handlerCloseMenu} className="navbar__link" to="/">Inicio</NavLink>
            
            <NavLink data-aos="zoom-out" onClick={handlerCloseMenu} className="navbar__link" to="/servicios">Servicios</NavLink>
            
            <NavLink data-aos="zoom-out" onClick={handlerCloseMenu} className="navbar__link" to="/contactanos">Contacto</NavLink>
            
            <Link className='navbar__link navbar__link--responsive' to={linkWhats}><FaWhatsapp />WhatsApp</Link>
            
            <Link className='navbar__link navbar__link--responsive' to={linkWhats}><FaEnvelope />Correo</Link>
            
            <button onClick={handlerCloseMenu} className='navbar__close'><FaXmark /></button>
          
          </nav>
          
          <nav className='navbar__enlaces'>
          
            <Link data-aos="fade-up" className='navbar__redes' target='_blank' to={linkWhats}><FaWhatsapp className='navbar__icon' /></Link>
          
            <Link data-aos="fade-down" className='navbar__redes' target='_blank' to={"mailto:"+correoElectronico}><FaEnvelope className='navbar__icon' /></Link>

            <button onClick={handlerShowMenu} className='navbar__btnmenu'><FaBars /></button>

          </nav>
      
      </section>

      <Outlet />

      <Parallax data-aos="fade-up" strength={400} blur={{min:-4, max:0}} bgImage={Background}>

        <footer className='footer'>

          <img data-aos="zoom-in" className='footer__logotipo' src={LogoFull} alt="Logotipo completo de Pepe Alonzo" />
          
          <nav className='footer__nav'>
            
            <NavLink data-aos="fade-in-left" to="/" className='footer__link'>Inicio</NavLink>
            
            <NavLink data-aos="fade-in-right" to="/servicios" className='footer__link'>Servicios</NavLink>
            
            <NavLink data-aos="fade-in-left" to="/contactanos" className='footer__link'>Contacto</NavLink>

            <div className='footer__mensajes'>

              <Link data-aos="fade-up" to={linkWhats} className='footer__link'><FaWhatsapp /></Link>

              <Link data-aos="fade-down" to={`mailto: ${correoElectronico}`} className='footer__link'><FaEnvelope /></Link>
      
            </div>

          </nav>

          <nav data-aos="zoom-out-up" className='footer__redes'>

            <Link className='footer__link' to={linkFacebook}><FaFacebookF /></Link>

            <Link className='footer__link' to={linkInstagram}><FaInstagram /></Link>
            
            <Link className='footer__link' to={linkLinkedin}><FaLinkedinIn /></Link>

          </nav>

          <p className='footer__copy'><FaRegCopyright /> 2023 - PEPE ALONSO REALTOR, Todos los derechos reservados.</p>

        </footer>

      </Parallax>

    
    </>
  )
}

export default Layout
