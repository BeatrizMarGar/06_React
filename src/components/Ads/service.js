//nos comunicamos con sparrest para ver los anuncios a través de axios

import client from "../../api/client";

const BaseURL = 'http://localhost:3001/api/v1'
const adv = `${BaseURL}/adverts`

export const AllAds = () => {
    const url = adv
    const result = client.get(url)
    return result
}

export const CreateAd = ad => {
    const url = adv
    const form = new FormData();
    form.append("name", ad.name)
    form.append("price", ad.price)
    form.append("sale", ad.sale)
    form.append("tags", [ad.tags])
    form.append("photo", ad.photo)
    console.log(ad)
    return client.post(url, form)
}

export const GetTags = () => {
    const url = `${adv}/tags`
    return client.get(url)
}

export const SelectTags = (tag) => {
    console.log(tag)
    const url = `${adv}?tag=${tag}`
    return client.get(url)
}

export const GetDetails = (info) => {
    const url = `${adv}/${info}`
    return client.get(url)
}

export const FilteredAds = (filter) => {

}


export const deleteAdvert = adId => {
    return client.delete(`${adv}/${adId}`);
  };