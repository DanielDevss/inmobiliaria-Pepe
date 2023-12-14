import {GrFormNextLink, GrFormPreviousLink} from 'react-icons/gr'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const GaleriaPropiedades = ({setPropiedad, setVentana}) => {

    const [categoria, setCategoria] = useState('')
    const [cantPaginas, setCantPaginas] = useState(1);
    const [data, setData] = useState([])

    const [paginaActual, setPaginaActual] = useState(1)

    const handleCategoria = (cat) => {
        setCategoria(cat)
        setPaginaActual(1);
    }

    const handlePageActual = (numero) => {
        setPaginaActual(numero)
    }
    
    const handlePageNext = () => {
        if(paginaActual === cantPaginas){
            setPaginaActual(cantPaginas)
        }else{
            setPaginaActual(paginaActual + 1)
        }
    }
    const handlePagePrev = () => {
        if(paginaActual === 1){
            setPaginaActual(1)
        }else{
            setPaginaActual(paginaActual - 1)
        }
    }

    const handleSelectImage = (e) => {
        setVentana(true)
        setPropiedad(e)
    }

    useEffect(() => {
        const url = import.meta.env.VITE_URL_API
        axios.get(`${url}controllers/get.controllers.php?categoria=${categoria}&page=${paginaActual}`)
        .then(data => {
            const dataApi = data.data
            setData(dataApi.propiedades)
            setCantPaginas(dataApi.paginas)
        })
    
    }, [categoria,paginaActual])

    const renderButtonsPages = () => {
        const botones = [];
        for(let page = 1; page <= cantPaginas; page++){
            botones.push(
                <li 
                    key={page}
                    className='gridpropiedades__paginas__item'
                    onClick={() => handlePageActual(page)}
                    >{page}</li>
            )
        }
        return botones
    }

    return (

    <section className="gridpropiedades">

        <header className="gridpropiedades__header">
            <h2 className="gridpropiedades__titulo">Nuestras Propiedades</h2>
            <nav className="gridpropiedades__nav">
                <button onClick={() => handleCategoria('')} className="gridpropiedades__nav__button">Todas</button>
                <button onClick={() => handleCategoria('departamento')} className="gridpropiedades__nav__button">Departamentos</button>
                <button onClick={() => handleCategoria('casa')} className="gridpropiedades__nav__button">Casas</button>
                <button onClick={() => handleCategoria('comercial')} className="gridpropiedades__nav__button">Locales</button>
            </nav>
            
        </header>

        <section className="gridpropiedades__grid">

        {data && data.map( e => (
            <article onClick={() => handleSelectImage(e) } className="gridpropiedades__propiedad" key={e.id}>
                <figure className="gridpropiedades__figure">
                    <img src={import.meta.env.VITE_URL_API + e.image_1} className="gridpropiedades__image" alt={e.descripcion} />
                </figure>
                <section className='gridpropiedades__propiedad__section'>
                    <h3 className='gridpropiedades__propiedad__titulo'>{e.propiedad}</h3>
                    {/* <p className='gridpropiedades__propiedad__descripcion'>{e.descripcion}</p> */}
                </section>
            </article>
        ) )}
        
        </section>
        
        <nav className="gridpropiedades__paginacion">

            <button className="gridpropiedades__paginacion__prev" onClick={handlePagePrev}><GrFormPreviousLink /></button>
            
            <ul className="gridpropiedades__paginas">
            
                {renderButtonsPages()}
            
            </ul>
            
            <button className="gridpropiedades__paginacion__next" onClick={handlePageNext}><GrFormNextLink /></button>
        
        </nav>

    </section>

  )
}

GaleriaPropiedades.propTypes = {
    setVentana: PropTypes.any.isRequired,
    setPropiedad: PropTypes.any.isRequired
}

export default GaleriaPropiedades