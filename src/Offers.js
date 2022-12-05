import { useState } from "react";
import { likeItems } from "./likeItems";

function Offers() {

    const [favouriteFlower, setFavouriteFlower] = useState(likeItems);

    const removeAll = () => {
        setFavouriteFlower([]);
    }

    const removeItem = (id) => {
        let newList = favouriteFlower.filter(element => element.id !== id);
        setFavouriteFlower(newList);
    }

    return(
        <div>
            <div className="flex">
                <h1>Choose 1 of {favouriteFlower.length} flowers and we will send its for you!!!!</h1>
            </div>

        <div className="like-component">
            {favouriteFlower.map(element => {
                const {id, image, content } = element;
                return(
                    <div className="like-card" key={id}>
                        <img className="like-img" src={image} alt="flowers" />
                        <h3 className="like-content">{content}</h3>
                        <button onClick={() => removeItem(id)} className="btn like">Remove</button>
                    </div>
                )
            })}
        </div>

        <div className="flex">
            <button onClick={() => removeAll()} className="btn remove">Remove all</button>
        </div>

    </div>
    )
}

export default Offers;