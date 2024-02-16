import React from "react"
import '../index.css'


export default function Header(){
    return (
        <header className="header">
            <img src="../images/troll-face.png" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React course - Project 3</h4>
        </header>
    )
}