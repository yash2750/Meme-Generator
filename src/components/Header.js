import React from "react"
import imag from "../images/troll-face.png"
export default function Header() {
    return (
        <header className="header">
            <img 
                src={imag} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">YASH RAJPUROHIT</h4>
        </header>
    )
}