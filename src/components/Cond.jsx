import React from 'react'

const Cond = () => {

    const [show,setShow] = useState(false);
    
    if (show === false){
        setShow = true;
    }else{
        setShow = false;
    }

  return (
    <div>
        <button>Show</button>
        <p>Hai </p>
    </div>
  )
}

export default Cond
