import React from "react"
import images from "../../constants/images"
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs"
import "./SpecialEvent.css"

export default function SpecialEvent(){
    const[playVideo,setPlayVideo] = React.useState(false)
    const vidRef = React.useRef()

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if(playVideo){
            vidRef.current.pause()
        }else{
            vidRef.current.play()
        }
    }

    return(
        <div className="event-video" id="event">
            <video
                src={images.event}
                type="video/mp4"
                loop
                control={false}
                ref={vidRef}
                muted
            />
            <div className="play-btn-container">
                <div className="play-btn" onClick={handleVideo}>
                {playVideo ? 
                    <BsPauseFill color="#fff" fontSize={30}/> : <BsFillPlayFill  color="#fff" fontSize={30}/>
                }
                </div>
            </div>  
        </div>
    )
 }