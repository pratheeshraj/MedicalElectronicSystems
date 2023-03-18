import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
 <div className='home_box'>
      <div className='home_box1'>
     <h2 className='home_text'>Welcome To Number Guessing Game</h2>
    <Link to="/EnterName"> <button className='home_button'>Start Game</button></Link>
   </div>
 </div>

  )
}

export default Home