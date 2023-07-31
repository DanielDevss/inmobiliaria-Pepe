import { Parallax } from "react-parallax"
import { useEffect } from 'react'
import AOS from "aos"

import Banner from "../components/Banner"
import CardRounded from "../components/CardRounded"

import FondoBanner from "../assets/images/servicios/fondo.jpg"
import FondoExelencia from "../assets/images/servicios/fondo-excelencia.jpg"
import FondoServicios from "../assets/images/servicios/fondo-servicios.jpg"
import FotoPepe from "../assets/images/servicios/foto-1.jpg"
import Pepe from "../assets/images/servicios/pepe.png"
import Alonso from "../assets/images/servicios/alonso.png"
import Filosofia from "../assets/images/servicios/filosofia.jpg"
import IconVenta from "../assets/images/servicios/venta.png"
import IconCompra from "../assets/images/servicios/compra.png"
import IconAlquiler from "../assets/images/servicios/alquiler.png"

import 'aos/dist/aos.css'

const Servicios = () => {

  useEffect(() => {
    AOS.init({})
  }, [])

  return (
    <>
      <Banner
        fondo={FondoBanner}
        titulo="Tu espacio, tu historía"
        subtitulo="Contamos con propiedades que se adaptan a tu estilo de vida" idScroll="exelencia" />

      <section id="exelencia" className="exelencia">

        <Parallax className="excelencia__parallax" bgImage={FondoExelencia} strength={300}>

          <article className="excelencia__article">
            
            <h2 className="excelencia__titulo">Exelencia <br /> e inovación</h2>

            <p className="exelencia__texto">Estamos convencidos de que más allá de la gran capacidad profesional de sus intereses, el éxito de la empresa radica en el sincero deseo de cada uno de ellos por crear una agencía inmobiliaria distinta al resto, en donde el cliente deje de ser visto como un número más y sea atendido como nostros mismos lo hemos querido y necesitado al momento de hacer alguna operación inmobiliaria.</p>
            
          </article>

        </Parallax>

        <section className="exelencia__contenedor">

          <img className="exelencia__fotografia" src={FotoPepe} alt="Fotografía de Pepe Alonso en blanco y negro" />

          <img className="exelencia__letras exelencia__letras--left" src={Pepe} alt="Letras de Pepe" />

        </section>

        <img className="exelencia__letras exelencia__letras--right" src={Alonso} alt="Letras de Pepe" />
        
      </section>


      <section className="vida">

        <h2 className="vida__titulo">Una vida extraordinaria merece un hogar extraordinario</h2>

        <p className="vida__texto">Nuestro principal propósito es cumplir con los sueños de nuestros clientes. Comprar, vender o alquilar un inmueble es algo muy importante para la mayoría de las personas, pues en muchos casos representa el patrimonio de toda una vida o simplemente se trata de una ilusión que se espera con mucho anhelo.</p>

        <p className="vida__frase">"Nuestra experiencia nos permite aportar un valor diferencial a nuestros clientes."</p>

      </section>


      <section className="filosofia">

        <header className="filosofia__header">
          
          <img src={Filosofia} className="filosofia__image"></img>

          <div className="filosofia__titulo">
          
            <h2 className="">Nuestra filosofia</h2>

          </div>
        
        </header>

        <article className="filosofia__secciones">

          <section className="filosofia__seccion">

            <h3 className="filosofia__subtitulo">Misión</h3>

            <p className="filosofia__texto">Nos comprometemos en ofrecer un servicio personalizado y profesional, guiando a cada individuo en su busqueda del espacio perfecto para crear recuerdos y alcanzar tus metas. Trabajamos con pasión y honestidad para ser reconocidos como el aliado confiable en proceso de encontrar el hogar de tus sueños.</p>

          </section>

          <section className="filosofia__seccion">

            <h3 className="filosofia__subtitulo">Visión</h3>

            <p className="filosofia__texto">Nuestra visión es ser líderes en el mercado inmobiliario, destacando por nuestra excelencía, innovación y compromiso con nuestros clientes. Buscamos expandir nuestros horizontes y convertirnos en una marca reconocida a nivel nacional e internacional por nuestra dedicación a contruir relaciones duraderas y satisfacer las necesidades únicas de cada cliente.</p>

          </section>

          <section className="filosofia__seccion">

            <h3 className="filosofia__subtitulo">Valores</h3>

            <p className="filosofia__texto">Integridad, Pasión, Empatía, Trabajo en equipo y Compromiso social.</p>

          </section>

        </article>

      </section>


      <main className="servicios">

        <img className="servicios__fondo" src={FondoServicios} alt="Fondo del área de servicios" />

      <article className="servicios__article">
        
        <h1 className="servicios__titulo">Nuestros servicios</h1>

        <section className="servicios__contenedor">
          
          <CardRounded icono={IconCompra} titulo="Compra" texto="Te guiaremos en cada visita, respondiendo a todas tus preguntas y brindándote información detallada sobre cada propiedad." />
          
          <CardRounded icono={IconVenta} titulo="Venta" texto="Nuestro objetivo es maximizar el valor de tu propiedad y agilizar el proceso de venta, reduciendo el tiempo en el mercado. Te acesoramos en la fijación del precio adecuado y negociamos en tu nombre para asegurar un trato justo y beneficioso." />
          
          <CardRounded icono={IconAlquiler} titulo="Alquiler" texto="Te guiamos en la busqueda de un espacio acogedor y funcional y se adapte a tus necesidaes y presupuesto. Te asistiremos en la preparación de documentos, negociación de términos y condiciones." />

        </section>

      </article>

      </main>

    </>
  )
}

export default Servicios
