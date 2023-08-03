import React from "react"
import images from "../../constants/images"
import menu from "../../constants/menu"
import Meals from "./Meals"

import ("./Menu.css")

export default function Menu(){
    return(
        <div className="menu--menu-container" id="menu">
            <h1 className="menu-header">Our Special Menu</h1>
            <div>
                <Meals menu={menu}/>
            </div>
        </div>
    )
}