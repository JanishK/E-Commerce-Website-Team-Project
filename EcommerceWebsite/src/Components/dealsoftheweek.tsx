function dealsOfTheWeek( { title, image, oldPrice, newPrice } : { title: string, image: string, oldPrice: number, newPrice: number } ) {
    return (
    <>
        <div className="deals-container">
            <div className="deal-card">
                <h3>{title}</h3>
                <img src={image} alt={title} />
                <p className="old-price">£{oldPrice.toFixed(2)}</p>
                <p className="new-price">£{newPrice.toFixed(2)}</p>
            </div>
        </div>
    </>)
}

export default dealsOfTheWeek;