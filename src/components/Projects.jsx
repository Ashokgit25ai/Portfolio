import React from 'react'

const Cond = ({show,set}) => {

    
    if (show === false){
        set = true;
    }else{
        set = false;
    }

  return (
    <div>
        <button onClick={Cond}>{show ? "Hide" : "Show"}</button>
        {show && <p>"Hai, I'm from Secret Page"</p>}
    </div>
  )
}

export default Cond;