import { useState } from "react";

function Flowers({propsForFlowerJs}) {

    const [showText, setShowText] = useState(false);

    const showTextClick = (flower) => {
        flower.showLess = !flower.showLess
        setShowText(!showText);
    }

    return(
            <div className="product-container">
                {propsForFlowerJs.map(flower => {
                    const { name, price, image, quote, id, showLess } = flower;
                    return(
                        <div className="flower-wrap" key={ id }>
                            <img className="flower-card" src={ image } alt="flower" />
                            <h4 className="product-name">{ name }</h4>
                            <h4 className="product-quote">

                                { showLess ?  quote.substring(0, 50) + "..." : quote }

                                <button className="show" onClick={ () => showTextClick(flower) }>
                                    { showLess ? "Show more" : "Show less"}
                                </button>
                            </h4>
                            <h5 className="price">${ price }</h5>
                        </div>
                    )
                })}
        </div>
    );
}

export default Flowers;