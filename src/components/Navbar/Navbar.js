import React from "react"
import images from "../../constants/images"
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Navbar(props){
    const [toggleMenu,setToggleMenu] = React.useState(false)
    function toggle(){
        setToggleMenu(!toggleMenu)
        console.log(toggleMenu)
    }

    return (
        <div>
            <nav className="navbar--nav">
                <img src={images.logo} alt="tine-yin-thar-logo" className="navbar--img"/>
                <ul className="navbar--ul">
                    <a href="#home"><li>Home</li></a>
                    <a href="#menu"><li>Cuisine</li></a>
                    <a href="#event"><li>Special Events</li></a>
                    <a href="#service"><li>Service</li></a>
                    <a href="#gallery"><li>Gallery</li></a>
                    <a href="#contact"><li>Contact Us</li></a>
                </ul>   
                <GiHamburgerMenu color="#FCE7CD" fontSize={30} onClickCapture={toggle} className="navbar--hamburger-menu"/> 
            </nav>
            { toggleMenu && (
            <div className="navbar--menu-overlay">
                <ul className="navbar--menu-overlay-ul">
                    <a href="#home" onClick={toggle}><li>Home</li></a>
                    <a href="#menu" onClick={toggle}><li>Cuisine</li></a>
                    <a href="#event" onClick={toggle}><li>Special Events</li></a>
                    <a href="#service" onClick={toggle}><li>Service</li></a>
                    <a href="#gallery" onClick={toggle}><li>Gallery</li></a>
                    <a href="#contact" onClick={toggle}><li>Contact Us</li></a>
                </ul>
            </div>
            )}
        </div>
    )
}