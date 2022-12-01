import { useState } from 'react';
import './App.css';
import Button from './Button';
import { data } from './data';
import Flowers from './Flowers';


function Eshop() {

    const [flowers, setFlowers] = useState(data);
    
    const chosenFlowers = (searchTerm) => {
        const newFlowers = data.filter(element => element.searchTerm === searchTerm);
        setFlowers(newFlowers);
    }
    


    return(
        <div className=''>
            <div className="heading">
                <h1>Free Standard Shipping</h1>
            </div>

            <div className='heading'>
                <Button myBtnProps={chosenFlowers}/>
            </div>

            <div>
                <Flowers propsForFlowerJs={flowers} />
            </div>

        </div>
    );
}

export default Eshop;