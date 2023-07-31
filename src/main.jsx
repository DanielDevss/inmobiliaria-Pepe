import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './styles/index.css'

import Layout from './pages/Layout'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

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
        path: 'servicios',
        element: <Servicios />
      },
      {
        path: 'contactanos',
        element: <Contacto />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
