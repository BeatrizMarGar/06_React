function Ad({...ad}){
    console.log(ad.name)
    return (
        <div>
            <h1>{ad.name}</h1>
            <p>{ad.description}</p>
            <p>{ad.price}</p>
        </div>
    )
}

export default Ad;