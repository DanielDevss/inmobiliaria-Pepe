export const obtenerIDVideo = (url) => {
    const newEnlaceArray = url.split('v=')
    const idYoutube = newEnlaceArray[1]

    return idYoutube
}