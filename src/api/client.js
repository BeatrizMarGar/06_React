import axios from 'axios'
//Axios permite usar Ajax y consumir APIs

const client = axios.create({
    //dbURL: process.env.REACT_APP_API_BASE_URL,
   dbURL: `https://localhost:3001`
})

//interceptors: funciones que llama axios en cada request
client.interceptors.response.use(
    response => response.data, //recibimos la info
    error => {
        if (!error.response){
            return Promise.reject({ message: error.mesagge})
        }
        return Promise.reject({
            message: error.response.statusText,
            ...error.response,
            ...error.response.data
        })
    },
)

export const setAuthHeader = token => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`
    console.log(token)
}

export const removeAuthHeader = () => {
    delete client.defaults.headers.common['Authorization']
}

export default client;

// todo se utiliza en un servicio para autorizar usuarios