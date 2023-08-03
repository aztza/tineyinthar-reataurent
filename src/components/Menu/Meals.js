import React from "react"
import "./Meal.css"

export default function Meal({menu}){
    return (
        <div className="meal-container" id="menu">
            {menu.menu.map((meal,index) => (
                <div key={index} className="menu-box">
                    <img src={meal.img} alt=".."/>
                    <div className="menu-detail">
                        <p>{meal.name}</p>
                        <p>{meal.price} ကျပ်</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}