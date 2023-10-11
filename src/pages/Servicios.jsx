import { Parallax } from "react-parallax"
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import { useOutletContext } from "react-router-dom";

import AOS from "aos"

import Banner from "../components/Banner"
import CardRounded from "../components/CardRounded"
import FlechaDerecha from "../assets/images/layout/flecha-derecha.png"
import FlechaIzquierda from "../assets/images/layout/flecha-izquierda.png"

import FondoBanner from "../assets/images/servicios/fondo.jpg"
import FondoExelencia from "../assets/images/servicios/fondo-excelencia.jpg"
import FondoServicios from "../assets/images/servicios/fondo-servicios.jpg"
import FotoPepe from "../assets/images/servicios/foto-1.jpg"
import Pepe from "../assets/images/servicios/pepe.png"
import Alonso from "../assets/images/servicios/alonso.png"
import Filosofia from "../assets/images/servicios/filosofia.jpg"
import IconVenta from "../assets/images/servicios/venta.png"
import IconCompra from "../assets/images/servicios/compra.png"


import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GaleriaPropiedades from "../components/GaleriaPropiedades";
import { obtenerPropiedadesBanner } from "../data/propiedades";


const Servicios = () => {

  const outletContext = useOutletContext();

  const [propiedades, setPropiedades] = useState([])

  const [infoPropiedad, setInfoPropiedad] = useState({})

  const { setPropiedad, setVentana } = outletContext

  useEffect(() => {
    AOS.init({})
  }, [])

  useEffect(() => {
    const data = async() => {
      const results = await obtenerPropiedadesBanner()
      setPropiedades(results)
      setInfoPropiedad({
        titulo: results[0].propiedad,
        descripcion: results[0].descripcion
      })
    }
    data()
  }, [])

  const handleSlideChange = (swiper) => {

    const index = swiper.activeIndex
  
    setInfoPropiedad({
      titulo: propiedades[index].propiedad,
      descripcion: propiedades[index].descripcion
    })

  }

  return (
    <>
      <Banner
        fondo={FondoBanner}
        titulo="Tu espacio, tu historia"
        subtitulo="Contamos con propiedades que se adaptan a tu estilo de vida" 
        idScroll="exelencia" />

      <section id="exelencia" className="exelencia">

        <Parallax data-aos="zoom-out" className="excelencia__parallax" bgImage={FondoExelencia} strength={300}>

          <article className="excelencia__article">
            
            <h2 data-aos="fade-in-left" className="excelencia__titulo">Excelencia <br /> e innovación</h2>

            <p data-aos="fade-in-right" className="exelencia__texto">Estamos convencidos de que más allá de la gran capacidad profesional de sus intereses, el éxito de la empresa radica en el sincero deseo de cada uno de ellos por crear una agencia inmobiliaria distinta al resto, en donde el cliente deje de ser visto como un número más y sea atendido como nosotros mismos lo hemos querido y necesitado al momento de hacer alguna operación inmobiliaria.</p>
          
          </article>

        </Parallax>

        <section className="exelencia__contenedor">

          <img data-aos="flip-right" className="exelencia__fotografia" src={FotoPepe} alt="Fotografía de Pepe Alonso en blanco y negro" />

          <img data-aos="zoom-out-up" className="exelencia__letras exelencia__letras--left" loading="lazy" src={Pepe} alt="Letras de Pepe" />

        </section>

        <img data-aos="zoom-out-down" className="exelencia__letras exelencia__letras--right" loading="lazy" src={Alonso} alt="Letras de Pepe" />
        
      </section>


      <section className="vida">

        <h2 data-aos="fade-left" className="vida__titulo">Una vida extraordinaria merece un hogar extraordinario</h2>

        <p data-aos="fade-right" className="vida__texto">Nuestro principal propósito es cumplir con los sueños de nuestros clientes. Comprar, vender un inmueble es algo muy importante para la mayoría de las personas, pues en muchos casos representa el patrimonio de toda una vida o simplemente se trata de una ilusión que se espera con mucho anhelo.</p>

        <p data-aos="fade-up" className="vida__frase">&quot; Nuestra experiencia nos permite aportar un valor diferencial a nuestros clientes.&quot;</p>

      </section>


      <section className="filosofia">

        <header className="filosofia__header">
          
          <img data-aos="flip-left" loading="lazy" src={Filosofia} className="filosofia__image"></img>

          <div className="filosofia__titulo">
          
            <h2 className="" data-aos="fade-left">Nuestra filosofía</h2>

          </div>
        
        </header>

        <article className="filosofia__secciones">

          <section data-aos="zoom-out" className="filosofia__seccion">

            <h3 className="filosofia__subtitulo">Misión</h3>

            <p className="filosofia__texto">Nos comprometemos en ofrecer un servicio personalizado y profesional, guiando a cada individuo en su búsqueda del espacio perfecto para crear recuerdos y alcanzar sus metas. Trabajamos con pasión y honestidad para ser reconocidos como el aliado confiable en el proceso de encontrar el hogar de tus sueños.</p>

          </section>

          <section data-aos="zoom-out" className="filosofia__seccion">

            <h3 className="filosofia__subtitulo">Visión</h3>

            <p className="filosofia__texto">Nuestra visión es ser líderes en el mercado inmobiliario, destacando por nuestra excelencia, innovación y compromiso con nuestros clientes. Buscamos expandir nuestros horizontes y convertirnos en una marca reconocida a nivel nacional e internacional por nuestra dedicación a construir relaciones duraderas y satisfacer las necesidades únicas de cada cliente.</p>

          </section>

          <section data-aos="zoom-out" className="filosofia__seccion">

            <h3 className="filosofia__subtitulo">Valores</h3>

            <p className="filosofia__texto">Integridad, Pasión, Empatía, Trabajo en equipo y Compromiso social.</p>

          </section>

        </article>

      </section>


      <main className="servicios">

        <img data-aos="zoom-out" className="servicios__fondo" loading="lazy" src={FondoServicios} alt="Fondo del área de servicios" />

      <article className="servicios__article">
        
        <h1 data-aos="fade-out-down" className="servicios__titulo">Nuestros servicios</h1>

        <section data-aos="fade-up" className="servicios__contenedor">
          
          <CardRounded icono={IconCompra} titulo="Compra" texto="Te guiaremos en cada visita, respondiendo a todas tus preguntas y brindándote información detallada sobre cada propiedad." />
          
          <CardRounded icono={IconVenta} titulo="Venta" texto="Nuestro objetivo es maximizar el valor de tu propiedad y agilizar el proceso de venta, reduciendo el tiempo en el mercado. Te asesoramos en la fijación del precio adecuado y negociamos en tu nombre para asegurar un trato justo y beneficioso." />
          
        </section>

      </article>

      </main>


      <section className="propiedades">

        <h2 data-aos="fade-down" className="propiedades__titulo">Propiedades agregadas recientemente</h2>

        <Swiper
          onSlideChange={handleSlideChange}
          className="propiedades__swiper Swiper"  
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination,Navigation]}
          navigation={{
            prevEl: '.flechas__prev',
            nextEl: '.flechas__next'
          }}
        >

          {propiedades.map((e, index) => (
            <SwiperSlide key={index} className="propiedades__slide">
              <section className="propiedades__slide__item">
                <img src={import.meta.env.VITE_URL_API + e.image_1} alt={e.descripcion} />
              </section>
            </SwiperSlide>
          ))}


          <div className="flechas__carrusel">
    
              <div className={`flechas__flecha flechas__prev`}>
          
                  <img src={FlechaIzquierda} alt="Flecha para retroceder" />
          
              </div>
          
              <div className={`flechas__flecha flechas__next`}>
          
                  <img src={FlechaDerecha} alt="Flecha para avanzar" />
          
              </div>
          
          </div>


        </Swiper>
        
        <article data-aos="fade-left" className="propiedades__article">
          
          <h3 data-aos="fade-right" className="propiedades__nombre">{infoPropiedad.titulo}</h3>
          
          <p data-aos="fade-right" className="propiedades__descripcion">{infoPropiedad.descripcion}</p>
        
        </article>

      </section>


      <GaleriaPropiedades setPropiedad={setPropiedad} setVentana={setVentana} />

    </>
  )
}

export default Servicios
