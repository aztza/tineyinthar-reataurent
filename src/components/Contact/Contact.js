import React from "react"
import {BsFacebook} from "react-icons/bs"
import ("./Contact.css")

export default function Contact(){
    return (
        <div className="contact-container" id="contact">
           <div className="contact">
                <h2>Location</h2>
                <p>No (2/A), Kanbae Road, Yankin Township, Yangon.</p>
                <h2>Hours</h2>
                <p>From 10:30 AM To 9:30 PM</p>
                <h2>Contact</h2>
                <p>09787154799</p>
                <h2>Social Media</h2>      
                <BsFacebook fontSize={40}/>  
           </div>  
        </div>
    )
}