import React, { useRef, useState } from 'react'

import GamePage from '../../gamePage/GamePage'
import "./enterName.css"
const EnterName = () => {
const [value,setValue]=useState(null)
  const [Nbutton, setNbutton] = useState(true)
  const [button, setButton] = useState(false)
  const userName = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const formData = Object.fromEntries(data.entries())
    const Name= formData.name;
  
  
   setButton(!button)
   setNbutton(!Nbutton)

   generateRandomNumber()
   localStorage.setItem("name",Name)

  }

  function generateRandomNumber() {
    let digits = [0,1,2,3,4,5,6,7,8,9];
    let randomNumber = "";
    
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      randomNumber += digits[randomIndex];
      digits.splice(randomIndex, 1);
    }
  
    setValue(Number(randomNumber));
  }
  
  



  return (
    <>
     {Nbutton ?  <div className='name_box'>
        <div className='name_box1'>
          <h2 className='name_text'>Enter Your Name</h2>
          <form onSubmit={handleSubmit}>
            <input
              name='name'
              className='name_input'
              type="text"
              placeholder='Enter Your Name'
              ref={userName}
            
              required
            />

            <button type='submit' className='name_button' >Start Game</button>
          </form>
        </div>

      </div>: null}
      {
        button ? <GamePage randomNumber={value} /> : null
      }

    </>
  )
}

export default EnterName