import React from 'react'
import './Banner.css'
const Banner = ({title}) => {
    return (
        <div className="banner">
            <h1
        style={{
         
          textAlign: "center",
          paddingTop:'2em',
          color: "white",
          opacity: "0.9",
          fontWeight: "bold",
        }}
      >
       {title}
      </h1>
        </div>
    )
}

export default Banner
