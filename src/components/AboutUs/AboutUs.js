import React from "react"
import images from "../../constants/images"
import ("./AboutUs.css")

export default function AboutUs(){
    return (
        <div className="about-us--container" id="home">
            <h1>Our Story</h1>
            <div className="about-us--content">
                <p>
                    Welcome to our Taing Yin Thar Restaurant which offers food from different ethnic groups and different regions of Myanmar,representing unique blend of ingredients. Myanmar is a diverse country with many ethnic groups living across the land with different climate and weather which result in a specific method of cooking. Here at Taing Yin Thar, you can enjoy a culinary tour of the entire country in one place.

                    Our chefs prepare the dishes with the finest quality of local ingredients from the various regions of Myanmar and maintain high standards of hygiene in the whole process. Our freshly prepared dishes are free from food coloring and artificial additives such as MSG.

                    Taing Yin Thar is located in the heart of the city at Yankin Township where it is surrounded by famous landmarks such as Inya Lake, Myanmar Plaza and Sedona Hotel. Decorated with traditional and tribal ornaments, instruments, paintings and furnishing, we offer an authentic cultural ambience and dining experience.
                </p>
                <img src={images.image22} alt="fish curry"/>
            </div>
        </div>
    )
}