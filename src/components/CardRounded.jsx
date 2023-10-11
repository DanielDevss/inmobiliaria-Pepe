const CardRounded = ({icono, titulo, texto, mainMode}) => {
  return (
    
    <article className={`servicios__card ${mainMode ? 'main' : ''}`}>
        
        <img src={icono} alt={`Icono del servicio ${titulo}`} />
        
        <h3>{titulo}</h3>
        
        <p>{texto}</p>

    </article>
  
  )
}

export default CardRounded
