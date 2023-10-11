// import { useEffect, useState } from "react"
import {Form, redirect} from 'react-router-dom'
import { auth } from '../data/login'

export const action = async ({request}) => {

    const form = await request.formData()
    const credenciales = Object.fromEntries(form)

    const respuesta = await auth(form);

    if(respuesta.respuesta === "ok"){

        const dataStorage = {
            user : respuesta.username,
            token : respuesta.token
        }

        const valueStorage = JSON.stringify(dataStorage)

        localStorage.setItem("auth", valueStorage);

        return redirect('/dashboard')

    }

    return credenciales


}

const Login = () => {

  return (
    <>
    <section className="login">
        <h1 className="login__titulo">Ingresa como Administrador</h1>
        <Form method="post" className="login__form">
            <div className="form__contenedor">
                <label htmlFor="usuario" className="form__label">Usuario</label>
                <input type="text" className="form__input" placeholder="Ingresa tu usuario" name="username" />
            </div>
            <div className="form__contenedor">
                <label htmlFor="password" className="form__label">Contraseña</label>
                <input type="password" className="form__input" placeholder="Ingresa tu contraseña" name="password" />
            </div>
            <div>
                <input type="submit" value={'Ir a Dashboard'} className="form__submit" />
            </div>
        </Form>
    </section>
    </>
  )
}

export default Login