//nos comunicamos con sparrest para ver los anuncios a través de axios

import client from "../../api/client";

const BaseURL = '/api/v1'

export const AllAds = () => {
    const url = `${BaseURL}/adverts`
    return client.get(url)
}