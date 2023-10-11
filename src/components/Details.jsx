import {useState} from 'react'
import PropTypes from 'prop-types';
import {FaX, FaPlay} from 'react-icons/fa6'
import YouTube from 'react-youtube';
import { obtenerIDVideo } from '../data/prepareIdYoutube';

const Details = ({setVentana, propiedad}) => {
    
    const [imagePreview, setImagePreview] = useState()
    const [videoPreview, setVideoPreview] = useState()

    const handleClose = () => {
        setVentana(false)

        setImagePreview()
        setVideoPreview()
    }

    const handleSelectImage = (image) => {
        setImagePreview(import.meta.env.VITE_URL_API + image)
        setVideoPreview(null)
    }

    const handleSelectVideo = (link) => {
        const idYoutube = obtenerIDVideo(link)
        setImagePreview(null)
        setVideoPreview(idYoutube)
    }

    const renderImages = () => {

        const images = []
        for(let i = 0; i<10; i++){
            if(propiedad[`image_${i+1}`]){
                images.push(
                    <img key={i} onClick={() => handleSelectImage(propiedad[`image_${i+1}`])} src={import.meta.env.VITE_URL_API + propiedad[`image_${i+1}`]} alt="" />
                )
            }
        }

        return images
    }

  return (
    
    <section className='details'>
        <header className='details__header'>

            <div className='details__textos'>

                <h2 className='details__nombre'>{propiedad.propiedad}</h2>
                <p className='details__details'>{propiedad.descripcion}</p>
            
            </div>
            
            <button onClick={handleClose} className='details__close'><FaX /></button>

        </header>

        <figure className='details__preview'>
            {!videoPreview ? (
                <img className='details__preview__element' src={imagePreview ? imagePreview : import.meta.env.VITE_URL_API + propiedad.image_1} alt="Imagen de prueba" />
            ) : (
                <YouTube className='details__preview__element' videoId={videoPreview} />
            )}
        </figure>

        <div className='details__contenedor'>
            <div className='details__images'>
                {renderImages()}
            </div>
            <div className='details__videos'>
                {propiedad.url1 && (
                <div onClick={() => handleSelectVideo(propiedad.url1)} className='details__video'>
                    <FaPlay />
                </div>
                )}
                {propiedad.url2 && (
                <div onClick={() => handleSelectVideo(propiedad.url2)} className='details__video'>
                    <FaPlay />
                </div>
                )}
            </div>
        </div>

    </section>
  )
}

Details.propTypes = {
    setVentana: PropTypes.any.isRequired,
    propiedad: PropTypes.any.isRequired
}

export default Details
