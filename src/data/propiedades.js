// const url = import.meta.env.VITE_URL
const urlapi = import.meta.env.VITE_URL_API

export const obtenerPropiedades = async({pagina, categoria}) => {

    const result = await (fetch(`${urlapi}controllers/get.controllers.php?page=${pagina}&categoria=${categoria}`))
    const data = await result.json();

    return data;
}

export const obtenerPropiedadesBanner = async() => {
    const result = await (fetch(`${urlapi}controllers/get.controllers.php?propiedadesbanner` ));
    const data = await result.json();

    return data;
}

export const obtenerPropiedad = async(id) => {
    const result = await (fetch(`${urlapi}controllers/get.controllers.php?id=${id}`))
    const data = await result.json();

    return data[0];
}