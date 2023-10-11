import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './styles/index.css'

import Layout from './pages/Layout'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import Login, {action as loginAction} from './pages/Login'
import LayoutDashboard, {loader as verifyTokenLoader} from './pages/LayoutDashboard'
import GestionPropiedad from './pages/GestionPropiedad'
import Dashboard from './pages/Dashboard'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Inicio />
      },
      {
        path: '/servicios',
        element: <Servicios />
      },
      {
        path: '/contactanos',
        element: <Contacto />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '/dashboard',
    element: <LayoutDashboard />,
    loader: verifyTokenLoader,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: ':categoria',
        element: <Dashboard />
      },
      {
        path: 'nueva-propiedad',
        element: <GestionPropiedad />,
      },
      {
        path: 'editar-propiedad/:id',
        element: <GestionPropiedad />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
