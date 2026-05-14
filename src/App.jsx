import React,{useState} from 'react'
import Child from './components/Child'
import Parent from './components/Parent'
import Pizza1 from './assets/Pizza1.jpg'
import pizza2 from './assets/pizza2.webp'
import pizza3 from './assets/pizza3.webp'
import ToggleMessage from './components/ToggleMessage'

const App = () => {

  const title1 = "Cheese Pizza"
  const price1 = "250/-"
  const title2 = "Panneer Pizza"
  const price2 = "300/-"
  const title3 = "Chicken Pizza"
  const price3 = "400/-"

  // const [count,setCount] = useState(0);
  const [show,setShow] = useState(false);
  


  return (
    // <div className="container" >
    //   <div className="card1">
    //     <Child image = {Pizza1} name = {title1} rupees = {price1} className = "pizza1" />
    //   </div>
    //   <div className="card1">
    //     <Child image = {pizza2} name = {title2} rupees = {price2} className = "pizza2"  />
    //   </div>
    //   <div className="card1">
    //     <Child image = {pizza3} name = {title3} rupees = {price3} className = "pizza3"  />
    //   </div>
    //   <div>
    //     <Parent count={count} counter={setCount} />
    //   </div>
      
    // </div>
    <ToggleMessage show = {show} set={setShow} />
    
  )
}


export default App

