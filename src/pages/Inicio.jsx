import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import AOS from 'aos'

//Componentes
import Banner from '../components/Banner'
import CardRounded from '../components/CardRounded'

// Imagenes
import ImageBanner from '../assets/images/main/fondo.jpg'
import ImageFuturo from '../assets/images/main/futuro.jpg'
import LetrasPepeFuturo from '../assets/images/main/pepe-alonso.png'
import FotoPepe from '../assets/images/main/pepe.png'
import ImagenSueno from '../assets/images/main/suenio.jpg'
import IconAtencion from '../assets/images/main/atencion.png'
import IconCartera from '../assets/images/main/cartera.png'
import IconExperiencia from '../assets/images/main/experiencia.png'
import LetrasPepeAlonso from '../assets/images/layout/letras.png'
import FlechaNext from '../assets/images/main/flecha-derecha-dark.png'
import FlechaPrev from '../assets/images/main/flecha-izquierda-dark.png'
import Brochure from '../assets/docs/BrochurePepeAlonso.pdf'
import { obtenerPropiedadesBanner } from '../data/propiedades'

const Inicio = () => {

  const [propiedades, setPropiedades] = useState([])

  const [infoPropiedad, setInfoPropiedad] = useState({})

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

  useEffect(() => {
    AOS.init({})
  })

  const handleSlideChange = (swiper) => {

    const index = swiper.activeIndex
  
    setInfoPropiedad({
      titulo: propiedades[index].propiedad,
      descripcion: propiedades[index].descripcion
    })

  }

  return (
    <>
     <Banner fondo={ImageBanner} mainMode={true} idScroll='futuro' /> 

     <section id="futuro" className='futuro'>
      
      <article className='futuro__article'>

        <h2 data-aos="zoom-in-right" className='futuro__titulo'>Tu futuro <br /> comienza aquí</h2>

        <section className='futuro__textos'>

          <p data-aos="zoom-out-right" className='futuro__parrafo'>Porque al igual que tú pensamos que a pesar de que existen muchas agencias inmobiliarias ninguna logra conectar de manera empática con sus clientes y al mismo tiempo garantizar un servicio profesional y de excelencia.</p>

          <p data-aos="zoom-out-left" className='futuro__parrafo'>En <span className='bold-mayus'>Pepe Alonso Realtor</span> somos un equipo apasionado de profesionales del sector en constante búsqueda de las mejores opciones para nuestros clientes, listos para acompañarte y guiarte en cada paso.</p>

        </section>

      </article>

      <section className='futuro__section'>

        <img data-aos="flip-right" className='futuro__imagen' src={ImageFuturo} loading='lazy' alt="Render de imagen de departamentos" />

      </section>

      <img className='futuro__letras' loading='lazy' src={LetrasPepeFuturo} alt="Letras de Pepe Alonso parpadeando" />

     </section>


      <section className='sueno'>

        <article data-aos="zoom-left" className='sueno__article'>

          <h2 data-aos="zoom-in-rght" className='sueno__titulo'>Tu sueño <br /> es nuestra misión</h2>

          <section className='sueno__contenido'>

            <p data-aos="zoom-out-up" className='sueno__texto'>En un campo tan competitivo como el inmobiliario nos distinguimos por la atención y dedicación que brindamos desde el primer momento a nuestros clientes, transmitiendo la confianza y la cercanía que se requieren para iniciar, desarrollar y llevar a buen término un proceso tan importante como lo es la compra, la venta, o cualquier otro de los servicios que ofrecemos.</p>

            <Link data-aos="flip-down" className='sueno__link' to="/servicios">Ver servicios <img src={FlechaNext} alt="Boton para ir a servicios" /></Link>

          </section>

        </article>

        <section className='sueno__imagenes'>

          <img data-aos="fade-up" className='sueno__fotografia' src={FotoPepe} alt="Fotografía de Pepe Alonso" />
          
          <img data-aos="fade-right" className='sueno__imagen' src={ImagenSueno} alt="Imagen del interior de una hermosa casa" />

        </section>

      </section>

      <section className="transparencia" data-aos="fade-in-up">

        <h2 data-aos="zoom-out-down" className='transparencia__titulo'>Transparencia y profesionalismo</h2>

        <section data-aos="flip-up" className='transparencia__cards'>

          <CardRounded mainMode={true} icono={IconExperiencia} titulo="Experiencia y conocimiento" texto="Con años de experiencia en el mercado inmobiliario, conocemos las tendencias locales y las oportunidades de inversión." />

          <CardRounded mainMode={true} icono={IconAtencion} titulo="Atención personalizada" texto="Valoramos cada cliente y nos enfocamos a entender sus necesidades específicas para brindar un servicio personalizado y enfocado a sus objetivos." />
          
          <CardRounded mainMode={true} icono={IconCartera} titulo="Cartera exclusiva" texto="Contamos con amplia y diversa cartera de propiedades en venta que se ajustan a tu presupuesto." />


        </section>

      </section>

      <a data-aos="zoom-out" className='sueno__link brochure' href={Brochure} download="Brochure.pdf">Descargar Brochure <img src={FlechaNext} alt="Boton para descargar brochure" /></a>


      <section className="propiedades">

        <h2 data-aos="zoom-out-up" className="propiedades__titulo">Descubre el mejor lugar para ti</h2>

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
    
              <div className={`flechas__flecha main flechas__prev`}>
          
                  <img src={FlechaPrev} alt="Flecha para retroceder" />
          
              </div>
          
              <div className={`flechas__flecha main flechas__next`}>
          
                  <img src={FlechaNext} alt="Flecha para avanzar" />
          
              </div>
          
          </div>


        </Swiper>
        
        <article data-aos="fade-left" className="propiedades__article">
          
          <h3 data-aos="fade-right" className="propiedades__nombre">{infoPropiedad.titulo}</h3>
          
          <p data-aos="fade-right" className="propiedades__descripcion">{infoPropiedad.descripcion}</p>
        
        </article>

      </section>

      <img className='main__letras' src={LetrasPepeAlonso} alt="Letras de Pepe Alonso parpadeando" />

    </>
  )
}

export default Inicio
