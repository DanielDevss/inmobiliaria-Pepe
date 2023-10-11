import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa6'

import FormularioPropiedades from '../components/FormularioPropiedades'

const GestionPropiedad = () => {

  const {id} = useParams()

  let navigate = useNavigate()

  const handleBackHistory = () => {
  
    navigate(-1)

  }

  const handleDelete = async () => {

    fetch(`${import.meta.env.VITE_URL}controllers/propiedades.php?id=${id}`, {
      method: "DELETE",
    })

    navigate('/dashboard')

    window.location.reload()

  }

  const handleSubmit = async (event) => {
    
    event.preventDefault()

    const formData = new FormData(event.target)

    const url = "https://pepealonsorealtor.com/backpepe/controllers/propiedades.php"

    if(!id){

      fetch(url, {
  
        method: "POST",
        
        body: formData
      
      })
      
    }else{

      fetch(`${url}?id=${id}`, {
  
        method: "POST",
        
        body: formData
      
      })
      
    }

    navigate('/dashboard')

    window.location.reload()

  }
  
  return (
    
    <section className='formulariopropiedad'>

      <header className='formulariopropiedad__header'>
        
        <h1 className='formulariopropiedad__titulo'>{id ? 'Actualizar Propiedad':'Nueva propiedad'}</h1>

        <button onClick={handleBackHistory} className="dashboard-boton-header">

          <FaArrowLeft className="dashboard-icono-header" />

          <span>Regresar</span>

        </button>

      </header>    
      
      <form method='post' onSubmit={handleSubmit} className='formulario'>

        <FormularioPropiedades id_propiedad={id} />

        {id && (
          <button onClick={handleDelete} type='button' className='form__delete'>Eliminar</button>
        )}

        <input type="submit" className='form__submit' value={id ?"Actualizar Propiedad":"Guardar Propiedad"} />

      </form>
  
    </section>
  
  )
}

export default GestionPropiedad