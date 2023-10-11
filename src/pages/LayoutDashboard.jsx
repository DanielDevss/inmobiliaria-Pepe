import { Outlet, NavLink, redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  HiHomeModern,
  HiMiniBuildingOffice2,
  HiMiniBuildingStorefront,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";

import "../styles/dashboard.css";

import Logo from "../assets/images/layout/logo.png";
import {obtenerPropiedades} from "../data/propiedades"
import { verifyToken } from "../data/login";

export const loader = async() => {

    const isVerify = await verifyToken()

    if(!isVerify){

      console.log("No está logeado")

      return redirect('/login')
    
    }

    return null

  }

const LayoutDashboard = () => {

  const [paginaActual, setPaginaActual] = useState(1)
  const [categoria, setCategoria] = useState('')
  const [cantidadPages, setCantidadPages] = useState(1);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const result = await obtenerPropiedades({pagina:paginaActual, categoria:categoria})
      const data = result.propiedades
      const paginas = result.paginas
      setData(data)
      setCantidadPages(paginas)
    }

    fetchData()
  }, [categoria, paginaActual])

  
  const handleCategoria = (categoria) => {
    setCategoria(categoria)
  }

  return (

    <>

    <div className="dashboard">

      <section className="sidebar">
      
        <img
          className="sidebar__logo"

          src={Logo}
          
          alt="Logotipo de Pepe Alonso"
        />

        <aside className="sidebar__aside">

          <h2 className="sidebar__titulo">Propiedades</h2>

          <nav className="sidebar__nav">

            <NavLink onClick={() => handleCategoria('')} className="sidebar__link" to="/dashboard/all">

              <HiOutlineSquare3Stack3D className="sidebar__icon" />
              
              <span>Todas las propiedades</span>
            
            </NavLink>

            <NavLink onClick={() => handleCategoria('departamento')} className="sidebar__link" to="/dashboard/departamentos">
            
              <HiMiniBuildingOffice2 className="sidebar__icon" />
            
              <span>Departamentos</span>
            
            </NavLink>

            <NavLink onClick={() => handleCategoria('casa')} className="sidebar__link" to="/dashboard/casas">
            
              <HiHomeModern className="sidebar__icon" />
            
              <span>Casas</span>
            
            </NavLink>

            <NavLink onClick={() => handleCategoria('comercial')} className="sidebar__link" to="/dashboard/comerciales">
            
              <HiMiniBuildingStorefront className="sidebar__icon" />
            
              <span>Comerciales</span>
            
            </NavLink>
          
          </nav>
        
        </aside>

      
        <footer className="dashboardfooter">

          <button type="button" className="boton-logout sidebar__link">
            
            <HiOutlineArrowLeftOnRectangle className="sidebar__icon" />

            <span>Cerrar Sesión</span>
          
          </button>
        
        </footer>
      
      </section>


      {/* LINK - CONTENEDOR */}

      <section className="contenedor">

        <Outlet context={{data, cantidadPages, setPaginaActual, paginaActual}} />
      
      </section>
    
    </div>
    
    </>
  
  );
};

export default LayoutDashboard;
