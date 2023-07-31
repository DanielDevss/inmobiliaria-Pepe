import React from 'react'

const CardRounded = ({icono, titulo, texto}) => {
  return (
    
    <article className='servicios__card'>
        
        <img src={icono} alt={`Icono del servicio ${titulo}`} />
        
        <h3>{titulo}</h3>
        
        <p>{texto}</p>

    </article>
  
  )
}

export default CardRounded
