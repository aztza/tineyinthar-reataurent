import React from "react"
import images from "../../constants/images"
import "./Service.css"

export default function Service(){
    return (
        <div id="service">
            <div>
                <h1 className="service--header">Our Service</h1>
                <div className="service-container">
                    <div  className="service-left-photo">
                        <img src={images.service} alt="service"/>
                    </div>
                    <div className="service-right-div">
                        <div className="service-right-texts">
                            <h3>Private Room and Function Room</h3>
                            <p>You can book private rooms and function rooms for gatherings, corporate meetings and dinners. For corporate meetings and seminars, we provide facilities such as projector, screen, pens and paper.</p>
                            <h3>Cultural Shows and Events</h3>
                            <p>We have an event hall with a stage for cultural shows and entertainment. We can inquire about different cultural shows which we can arrange for you according to your event. On Festive holidays, we usually have special events and celebrations at the restaurant. You can check the updates at our Facebook page, Taing Yin Thar Myanmar National Restaurant.</p>
                            <h3>Catering Service</h3>
                            <p>We offer catering service for both indoor and outdoor events. You can choose or customize from a wide variety of buffet and set menu.</p>
                            <h3>Delivery Service</h3>
                            <p>You can order our food from your home or office via Food2U and Yangon Door2Door. You can place order through their websites and Facebook pages.</p>
                        </div>
                        <div className="service-delivery-logo">
                            <img src={images.Food2u} alt="food2ulogo"/>
                            <img src={images.logo_square} alt="logo_square"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}