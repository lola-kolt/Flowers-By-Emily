function Flowers({propsForFlowerJs}) {
    return(
        <div className="product-container">
            {propsForFlowerJs.map(flower => {
                const { name, price, image, id } = flower;
                return(
                    <div className="flower-wrap" key={ id }>
                        <img className="flower-card" src={ image } alt="flower" />
                        <h4 className="product-name">{ name }</h4>
                        <h5 className="price">${ price }</h5>
                    </div>
                )
            })}
        </div>
    );
}

export default Flowers;