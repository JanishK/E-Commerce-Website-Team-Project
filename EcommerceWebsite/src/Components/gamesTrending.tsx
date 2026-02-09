function gamesTrending( {title, image, price, rank} : {title: string, image: string, price: number, rank: number} ) {
    return (
        <>
            <div className="trendingcontainer">
                <div className="product">
                    <p>STANDARD EDITION</p>
                    <h3>{title}</h3>
                    <p>£{price}</p>
                </div>
            </div>
        </>
    )
}

export default gamesTrending;