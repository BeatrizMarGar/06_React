
const filterByTags =
({ tags }) => (tag => tags.includes(tag));

  
export const filter_Adverts = (adverts, { tags }) =>
// adverts.filter(
//   advert =>
//     filterByName(name)(advert) &&
//     filterByPrice(price)(advert) &&
//     filterBySale(sale)(advert) &&
//     filterByTags(tags)(advert),
// );
adverts.filter(filterByTags(tags));