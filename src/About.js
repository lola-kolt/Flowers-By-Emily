import { useState } from "react";
import { aboutData } from "./aboutData";
import "./App.css"

function About() {


    const [service, setService] = useState(0);
    const { image, text } = aboutData[service];

    
    const previousBtn = () => {
        setService(service => {
            service --;
            if(service < 0) {
                return aboutData.length - 1;
            }
            return service;
        })
        
    }

    const nextBtn = () => {
        
        setService(service => {
            service ++;
            if (service > aboutData.length - 1) {
                service = 0;
            }
            return service;
        })
    }

    return(
        <div className="whyUs">
            <div className="heading">
                <h1>Why choose us?</h1>
            </div>

            <div className="about-component">

                <div className="prev">
                    <button onClick={previousBtn}>
                        <img className="arrow" src="https://img.icons8.com/ios-glyphs/2x/chevron-left.png" alt="left-arrow" />
                    </button>
                </div>

                <div className="about-content">
                    <img className="icon-slides" src={image} alt="icon" />
                    <p>{text}</p>
                </div>

                <div className="next">
                    <button onClick={nextBtn}>
                        <img className="arrow" src="https://img.icons8.com/ios-glyphs/2x/chevron-right.png" alt="right-arrow" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default About;