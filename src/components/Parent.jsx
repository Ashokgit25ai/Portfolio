import React from 'react'

const Parent = ({count,counter}) => {


    

    const clickButton = () =>{
        counter(count+1);
    };
  return (
    <div>
        <h2>{count}</h2>
        <button onClick = {clickButton}>Click</button>
    </div>
  )
}

export default Parent
