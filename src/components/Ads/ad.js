function Ad({...ad}){
    return (
        <div>
            <p>{ad.sale ? 'se vende' : 'se busca'}</p>
            <p>{ad.price}</p>
        </div>
    )
}

export default Ad;