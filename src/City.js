import React from 'react'
import './App.css';




function City({city}) {
  return (
    <div className='description'>
        <h2>{city.name}</h2>
        <h3 className={city.main.temp<20 ? "cold" : "hot"}>{city.main.temp}°C</h3> 
        <h1>{city.weather[0].description}</h1>
    </div>
  )
}

export default City
