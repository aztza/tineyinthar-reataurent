import React from "react"
import images from "../../constants/images"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import "./Gallery.css"

export default function Gallery(){
    const scrollRef = React.useRef(null)
    console.log(images)
    const scroll = (direction) => {
        const {current} = scrollRef;
        if(direction === "left"){
            current.scrollLeft -= 300;
        }else{
            current.scrollLeft += 300;
        }
    }

    const galleryImage = [ images.bar, images.bar2, images.bar3, images.bar4]

    return (
        <div className="gallery-container" id="gallery">
            <div className="gallery-content">
                <h1>Photo Gallery</h1>
                <a>View More</a>
            </div>
            <div className="gallery-photo-section">
                <div className="gallery-photo-container" ref={scrollRef}>
                    {galleryImage.map((image,index) => 
                        <div className="gallery-photo" key={index + 1}>
                            <img src={image} alt="bar"/>
                        </div>
                    )}
                </div>
                <div className="gallery-arrow">
                    <BsArrowLeftShort className="gallery-arrow-icon" onClick={()=>scroll("left")} />
                    <BsArrowRightShort className="gallery-arrow-icon" onClick={()=>scroll("right")} />
                </div>
            </div>
        </div>
    )
}