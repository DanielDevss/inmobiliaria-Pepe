const url = import.meta.env.VITE_URL

export const auth = async(data) => {

    const results = await(fetch(`${url}controllers/auth.php`, {
        method:"POST",
        body: data
    }))

    const respuesta = await results.json()

    return respuesta

}


export const verifyToken = async() => {

    const data = localStorage.getItem('auth')

    if(data){

        const {token, user} = JSON.parse(data)

        const results = await(fetch(`${url}controllers/auth.php?verify&token=${token}&username=${user}`, {
            method: "POST"
        }))
        const respuesta = await results.json()
        
        return respuesta.respuesta

    }

    return false

}