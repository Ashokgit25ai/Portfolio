import React from 'react'

const Handling_onButton = ({name,setname,submitName,setSubmitName}) => {
    
    const submitButton = (event) => {
        event.preventDefault();
        setSubmitName(name);
    }
  return (
    <div>
        <form action="" onSubmit={submitButton}>
            <input type="text" placeholder = "Enter Name..." onChange={(e)=>setname(e.target.value)}/>
            <button type="submit">Submit</button>
            
        </form>
        <h3>{submitName}</h3>
      
    </div>
  )
}

export default Handling_onButton
