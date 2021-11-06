//nos comunicamos con sparrest para ver los anuncios a través de axios

import client from "../../api/client";

const BaseURL = 'http://localhost:3001/api/v1'
const adv = `${BaseURL}/adverts`

export const AllAds = () => {
    const url = adv
    return client.get(url)
}

export const CreateAd = ad => {
    const url = adv
    return client.post(url, ad)
}

export const GetTags = () => {
    const url = `${adv}/tags`
}