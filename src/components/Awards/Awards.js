import React from "react"
import images from "../../constants/images"
import ('./Award.css')

export default function Awards(){
    return (
        <div className="Award-container" id="award">
            <h1>Our Achivement</h1>
            <div className="Award-Images">
                <img src={images.award1}/>
                <img src={images.award2}/>
                <img src={images.award3}/>
            </div>
        </div>
    )
}