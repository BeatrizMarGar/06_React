//nos comunicamos con sparrest para ver los anuncios a través de axios

import client from "../../api/client";

const BaseURL = process.env.REACT_APP_API_BASE_URL + '/api/v1'
const adv = `${BaseURL}/adverts`

export const AllAds = () => {
    const url = adv
    return client.get(url)
}

export const CreateAd = ad => {
    const url = adv
    const form = new FormData();
    form.append("name", ad.name)
    form.append("price", ad.price)
    form.append("sale", ad.sale)
    form.append("tags", [ad.tags])
    if (ad.photo != null){
      form.append("photo", ad.photo)
    }
    return client.post(url, form)
}

export const GetTags = () => {
    const url = `${adv}/tags`
    return client.get(url)
}

export const SelectTags = (tag) => {
    const url = `${adv}?tag=${tag}`
    return client.get(url)
}

export const GetDetails = (info) => {
    const url = `${adv}/${info}`
    return client.get(url)
}


export const getFilteredAds = async (filter) => {
    const filterList = {
      name: filter.name,
      tags: [filter.tags],
      price: [filter.priceMin, filter.priceMax],
      sale: filter.sale,
    };

    const formatFilter = (filter) => {
      const filterKeys = Object.keys(filter);
      let filteredQuery = "";
      for (const key of filterKeys) {
        const value = filter[key];
        if (value) {
          if (Array.isArray(value)) {
            for (const element of value) {
              if(element == ''){
              } else {
              if(Array.isArray(element)) {
                    for (const el of element) {
                      filteredQuery += `&${key}=${el}`;
                    }
                } else {
                  filteredQuery += `&${key}=${element}`;
                }
              }
            }
          } else {
            filteredQuery += `&${key}=${filter[key]}`;
          }
        }
      }
      return filteredQuery;
    };
    const url = `${BaseURL}/adverts?${formatFilter(filterList)}`;
    return client.get(url)
    
  };

  
export const deleteAdvert = adId => {
    return client.delete(`${adv}/${adId}`);
  };