import React from 'react'
import './About.css'

const About = () => {
  const name = "Ganesh Venkata Ashok Boddu"
  const age = 22;
  const stream = "Bachelor's of Technology"
  const branch = "Electronics and Communication Engineering"
  const country = "India"
  return (
    <div className="card">
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Stream: {stream}</h4>
      <h4>Branch: {branch}</h4>
      <h4>Country: {country}</h4>
    </div>
  )
}

export default About;
