import React from 'react'
import landing from "../assets/Group 381.svg"
const Home = () => {
  return (
    <div>Home

      <div>
      <object
        type="image/svg+xml"
        data={landing}
        className="w-full h-auto"
        aria-label="Timeline SVG"
      >
        Your browser does not support SVG
      </object>
    </div>
    </div>
  )
}

export default Home