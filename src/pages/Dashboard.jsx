import { useOutletContext, NavLink, useNavigate } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { HiPlus } from "react-icons/hi"

const Dashboard = () => {

  const outletContext = useOutletContext();
  const { data, setPaginaActual, paginaActual, cantidadPages } = outletContext;

  const navigate = useNavigate() 

  const handleEditar = (id) => {
    navigate(`/dashboard/editar-propiedad/${id}`)
  }

  const handleNextPage = () => {
    if (paginaActual === cantidadPages) {
      setPaginaActual(cantidadPages)
    } else {
      setPaginaActual(paginaActual + 1)
    }
  }

  const handlePrevPage = () => {
    if (paginaActual === 1) {
      setPaginaActual(1)
    } else {
      setPaginaActual(paginaActual - 1)
    }
  }

  return (
    <>
      <header className="dashboard__header">

        <h1 className="dashboard__titulo">Propiedades</h1>

        <NavLink to='/dashboard/nueva-propiedad' className="dashboard-boton-header">

          <HiPlus className="dashboard-icono-header" />

          <span>Nueva propiedad</span>

        </NavLink>

      </header>

      <section className="imagenes">
        
        {data && data.map(e => (
        
          <button type="button" onClick={() => handleEditar(e.id)} className="imagenes__item" key={e.id}>
        
            <img className="imagenes__img" src={e.image_1} alt="Imagen de muestra" />
        
          </button>
        
        ))}
      
      </section>
      
      <footer className="dashboard__footer">
      
        <p className="dashboard__footer__titulo">Páginas</p>
      
        <section className="dashboard__paginacion">
      
          <button className="button-next" onClick={handlePrevPage}><GrFormPrevious /></button>
      
          <p>{paginaActual} / {cantidadPages}</p>
      
          <button className="button-next" onClick={handleNextPage}><GrFormNext /></button>
      
        </section>
      
      </footer>
    </>
  );
};

export default Dashboard;
