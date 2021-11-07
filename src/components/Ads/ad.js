function Ad({...ad}){
    console.log(ad.name)
    return (
        <div id={ad.id}>
            <p>anuncio</p>
            <p>{ad.name}</p>
            <p>{ad.sale ? 'se vende' : 'se busca'}</p>
            <p>{ad.price}</p>
            <p>{ad.tags}</p>
        </div>
    )
}

export default Ad;