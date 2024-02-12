import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"

import Hero from "./components/Hero"
/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = Data.map(item => {
      return (
        <Card
            key={item.id}
            {...item}
        />
      )
    })     


    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
              {cards}

            </section>
        </div>
    )

}