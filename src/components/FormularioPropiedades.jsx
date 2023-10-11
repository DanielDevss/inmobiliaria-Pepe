import { useState } from 'react'
import {BiPlus} from 'react-icons/bi'
import { useEffect } from 'react'
import { obtenerPropiedad } from '../data/propiedades'


const FormularioPropiedades = ({id_propiedad}) => {

    const [dataPropiedad, setDataPropiedad] = useState({})

    if(id_propiedad) {

        useEffect( ()=> {
        
            const data = async () => {

                const result = await obtenerPropiedad(id_propiedad)

                console.table(result)
                
                setDataPropiedad(result)
                
            }

            data()
        
        }, [])

    }

    const handleOnChange = (e) => {

        const {name, value} = e.target;

        const dataPropiedadCopy = {...dataPropiedad}

        if(name === "carrusel"){
            dataPropiedadCopy[name] = e.target.checked
        }else{
            dataPropiedadCopy[name] = value
        }

        setDataPropiedad(dataPropiedadCopy);
        
    }
    
    const [imagePlaceholder, setImagePlaceholder] = useState([])
    
    const handleSelectImage = (event,key) => {

        const file = event.target.files[0];

    // Validamos si se seleccionó un archivo y si es una imagen
        if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        // Cuando el reader termine de leer el archivo, seteamos la URL de la imagen
        reader.onloadend = () => {
            const newImages = [...imagePlaceholder];
            newImages[key] = reader.result;
            setImagePlaceholder(newImages);
        };

        // Leemos el contenido del archivo como una URL
        reader.readAsDataURL(file);
        } else {
        // Si el archivo seleccionado no es una imagen, puedes mostrar un mensaje de error o hacer algo más.
        console.error('El archivo seleccionado no es una imagen válida.');
        }

        console.log(imagePlaceholder)
    }
    
    const renderInputImages = () => {

        const inputs = []

        for(let i = 0; i < 10; i++){
            if(!id_propiedad){
                inputs.push(
                    <div className='input-content-image' key={i+1}>
    
    
                        {imagePlaceholder[i] ? (
                            <img className="input-placeholder" src={imagePlaceholder[i]} alt="Imagen de previsualización" />) : ''
                        }
    
                        <BiPlus className='input-icon' />
                        
                        <p id='etiquetaInputImage'>Pulsa o arrastra para agregar imagenes</p>
                        
                        <input onChange={(e) => handleSelectImage(e,i)} type="file" name={`image_${i + 1}`} id={`inpImage_${i
                            +1}`} className="form__input" />
    
                    </div>
                )
            }else{
                inputs.push(
                    <div className='input-content-image' key={i+1}>
    
                        {imagePlaceholder[i] ? (
                            <img className="input-placeholder" src={imagePlaceholder[i]} alt="Imagen de previsualización" />) : (
                                <img className="input-placeholder" src={dataPropiedad[`image_${i+1}`]} alt={dataPropiedad.descripcion} />
                            )
                        }
                        <BiPlus className='input-icon' />
                        
                        <p id='etiquetaInputImage'>Pulsa o arrastra para agregar imagenes</p>
                        
                        <input onChange={(e) => handleSelectImage(e,i)} type="file" name={`image_${i + 1}`} id={`inpImage_${i
                            +1}`} className="form__input" />
    
                    </div>
                )
            }
        }

        return inputs;
    }

  return (
    <div className="modal__form" >

        <div className='mb'>
            <label htmlFor="isBanner">
                <input onChange={handleOnChange} type="checkbox" name="carrusel" id="isBanner" checked={dataPropiedad.carrusel && ((dataPropiedad.carrusel == 0) ? false : true)} />
                 Deseao visualizar está propiedad en el carrusel
            </label>
        </div>
        
        <div className='mb'>
        
            <label className="form__label" htmlFor="inpPropiedad">Propiedad</label>
        
            <input onChange={handleOnChange} value={dataPropiedad.propiedad} name="propiedad" type="text" className="form__input" id="inpPropiedad" placeholder="Ingresa el nombre de la propiedad" />
        
        </div>
        
        <div className='mb'>
        
            <label className="form__label" htmlFor="inpCategoria">Categoría</label>
        
            <select value={dataPropiedad.categoria} name="categoria" id="inpCategoria" 
            className='form__input'>
            
                <option selected disabled>Selecciona una categoria</option>
            
                <option value="casa">Casa</option>
            
                <option value="departamento">Departamento</option>
            
                <option value="comercial">Comercial</option>
            
            </select>
        </div>
        
        <div className='mb'>
        
            <label className="form__label" htmlFor="textDescripcion">Descripción</label>
        
            <textarea onChange={handleOnChange} value={dataPropiedad.descripcion} name="descripcion" id="textDescripcion" className="form__text" placeholder="Añade una descripción de la propiedad"></textarea>
        
        </div>
        
        <div className='mb'>
            
            <label htmlFor="inpImages" className="form__label">Selecciona las imagenes</label>
            
            <div className="form__inputs__images">
            
                {renderInputImages()}
            
            </div>
        </div>

        <div className='mb'>
            <label className='form__label'>Añade enlaces de youtube</label>
            
            <div className='form__enlaces'>
                
                <input onChange={handleOnChange} value={dataPropiedad.url1} name='url1' className='form__input' placeholder='Enlace 1' type="url" />
                
                <input onChange={handleOnChange} value={dataPropiedad.url2} name='url2' className='form__input' placeholder='Enlace 2' type="url" />
            
            </div>
        </div>

    </div>
  )
}

export default FormularioPropiedades