function Ad({...ad}){
    return (
        <div>
            <h1>anuncio</h1>
            <h1>{ad.sale ? 'se vende' : 'se busca'}</h1>
            <h1>{ad.price}</h1>
        </div>
    )
}

export default Ad;