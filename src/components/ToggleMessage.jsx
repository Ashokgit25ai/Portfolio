import React from 'react'

const ToggleMessage = ({show,set}) => {

  return (
    <div>
        <button onClick={() => set(!show)}>{show ? "Hide" : "Show"}</button>
        {show && <p>"Hai, I'm from Secret Page"</p>}
    </div>
  )
}

export default ToggleMessage;
