//nos comunicamos con sparrest para ver los anuncios a través de axios

import client from "../../api/client";

const BaseURL = '/api'

export const AllAds = () => {
    //const url = `${BaseURL}/ads`
    const url = `http://localhost:8000/api/ads`
    return client.get(url)
}