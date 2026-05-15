import React from 'react'

const Handling_Events = ({text,setText}) => {
    
  return (
    <div>
      <input type="text" placeholder = "Enter Name..." onChange={(e)=>setText(e.target.value)} />
      
      <p>{text}</p>
    </div>
  )
}

export default Handling_Events
