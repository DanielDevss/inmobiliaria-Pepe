import {Parallax} from 'react-parallax'

import Flecha from '../assets/images/layout/flecha.png'
import FlechaDark from '../assets/images/layout/flecha-dark.png'
import Logotipo from '../assets/images/main/logotipo.png'

const BannerInfo = ({titulo, subtitulo, mainMode}) => {
    if(!mainMode){
        return (
            <article className='banner__info'>
            
                <div className='banner__vineta'></div>
        
                <section className='banner__textos'>
        
                    <h1 className='banner__titulo'>{titulo}</h1>
        
                    <p className='banner__subtitulo'>{subtitulo}</p>
        
                </section>
        
            </article>
        )
    }else{
        return (
            <img className='banner__logo' src={Logotipo} alt='Logotipo'></img>
        )
    }
}

const Banner = ({fondo,titulo,subtitulo,idScroll,mainMode}) => {
    
  return (
    
    <Parallax bgImage={fondo} strength={500}>

        <header className="banner">
        
            <BannerInfo titulo={titulo} subtitulo={subtitulo} mainMode={mainMode} />
        
            <a className={`banner__bajar ${mainMode ? 'main' : ''}`} href={`#${idScroll}`}>
        
                <p>Descubrir</p>
        
                <img src={!mainMode ? Flecha : FlechaDark} alt="Flecha para bajar" />
        
            </a>
        
        </header>
    
    </Parallax>
  )
}

export default Banner
