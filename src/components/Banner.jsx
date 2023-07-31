import {Parallax} from 'react-parallax'
import {Link} from 'react-router-dom'

import Flecha from '../assets/images/layout/flecha.png'
import FlechaDark from '../assets/images/layout/flecha-dark.png'

const Banner = ({fondo,titulo,subtitulo, idScroll, darkMode}) => {
  return (
    
    <Parallax bgImage={fondo} strength={500}>

        <header className="banner">
        
            <article className='banner__info'>
        
                <div className='banner__vineta'></div>
        
                <section className='banner__textos'>
        
                    <h1 className='banner__titulo'>{titulo}</h1>
        
                    <p className='banner__subtitulo'>{subtitulo}</p>
        
                </section>
        
            </article>
        
            <a className='banner__bajar' href={`#${idScroll}`}>
        
                <p>Descubrir</p>
        
                <img src={!darkMode ? Flecha : FlechaDark} alt="Flecha para bajar" />
        
            </a>
        
        </header>
    
    </Parallax>
  )
}

export default Banner
