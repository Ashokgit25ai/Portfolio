import React from 'react'

const ToggleInput = ({showPass,setPass}) => {
    const handlePassword = () =>{
        setPass(!showPass)
    }

  return (
    <div>
        <input type={showPass ? "password" : "text"} />
        <button onClick={handlePassword}>{showPass ? "Hide" : "Show"}</button>
    </div>
  )
}

export default ToggleInput
