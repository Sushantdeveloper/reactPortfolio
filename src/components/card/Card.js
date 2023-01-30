import React from 'react'
import'./card.css'
function Card({emoji,heading,details}) {
  return (
    <div className='card' >
        <img style={{width:'6rem',height:'7rem'}}  src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{details}</span>
<button className=" button i-card">More Details</button>
    </div>
    
  )
}

export default Card