import { useState } from "react";
import Button from "./Button";



const Card = ({id, image, title, desc, handleClick}) => {

    const [flipped, setFlipped] = useState(false);

    return (
        <div 
            id={`card-${id}`}
            className={`flip-card ${flipped ? "flipped" : ""}`} 
            onClick={() => setFlipped(!flipped)}
        >
            <div className="flip-card-inner">
                <div 
                    className="flip-card-front"
                    style={
                        image ? {
                            backgroundImage: `linear-gradient(
                            rgba(0, 212, 255, 0.3),
                            rgba(95, 112, 228, 0.3)
                            ), url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        } : {}
                    }
                >
                    <p className="title">{title}</p>
                </div>
                <div className="flip-card-back">
                    <p className="title">{title}</p>
                    <p className="desc">{desc}</p>
                    <Button 
                        text="See More" 
                        handleClick={handleClick} 
                        handleStopPropag={(e) => {e.stopPropagation();}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;