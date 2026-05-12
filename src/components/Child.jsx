import React from 'react';
import './Child.css';

const Child = ({image,name,rupees,className}) => {
  return (

    <div className = {className}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{rupees}</p>
    </div>
      

  )
}

export default Child
