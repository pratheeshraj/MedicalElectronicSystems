import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./gamePage.css"
const GamePage = ({randomNumber}) => {

  const [enterNumber,setEnterNumber]=useState(null)
  const [message,setmessage]=useState("")
  const [count,setCount]=useState(0)
   const [sameIndex,setSameIndex]=useState("")
   const [presentNumber,setPresentNumber]=useState("")
   const navigator=useNavigate()
   const [notPresentNumber,setNotPresentNumber]=useState("")
   const countRef = useRef(1);
  const number = useRef(null)







const handleClick=()=>{

  let num1 = randomNumber;
  let num=enterNumber

  let digits = num.toString().split('');
let realDigits = digits.map(Number);
console.log(realDigits);

let digits1 = num1.toString().split('');
let realDigits1 = digits1.map(Number);
  
  console.log(realDigits1);

  


let same=[]
for (let i = 0; i < realDigits.length; i++) {
    
  if(realDigits[i] == realDigits1[i] ){
     
     same.push("*")
  }
}
 const sameindex = same.length

let notsame=[]

for (let i = 0; i < realDigits.length; i++) {
    

 for (let j = 0; j < realDigits1.length; j++) {
   
    if(realDigits1[i]==realDigits[j]){
      
        notsame.push(".")
    }
}
}

let notsame1=(notsame.length-sameindex)
console.log(notsame1)




let nonumber=4

nonumber=nonumber-(notsame1+sameindex)
console.log(nonumber)






const same1=[]

for (let i = 0; i <sameindex ; i++) {
    
  
     
     same1.push("+")
  
}

setSameIndex(same1)






const presentNumber=[]

for (let i = 0; i <notsame1 ; i++) {
    
  
     
     presentNumber.push("-")
  
}

setPresentNumber(presentNumber)





let noPresentNumber=[]

for (let i = 0; i <nonumber ; i++) {
    
  
     
     noPresentNumber.push("*")
  
}
setNotPresentNumber(noPresentNumber)






  setCount(count+1)


  console.log("a");
  console.log(randomNumber,enterNumber);
if(randomNumber == enterNumber){

setmessage("congratulations !! You find the number")
}else(

  setmessage("Number is not corrrect")
 
)


}
 const name=localStorage.getItem("name")
 console.log(name);

const handleSubmit = (e) => {
  
  e.preventDefault();
  
handleClick()

}


const highScore=()=>{
  countRef.current = count;
  
 
  if (countRef.current >count ? count : count) {
    
  }
  console.log(countRef.current);
  
}
const newGame=()=>{
  navigator("/")
}

highScore()

  return (
    <div className='game_box'>
    <div className='game_box1'>
    <h2 className='game_text'>Hello {name} <span style={{marginLeft:"30px"}}>Your High score Is:{countRef.current}</span></h2>
      <h2 className='game_text'>Enter Your Number</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='number'
          
          className='game_input'
          type="number"
          placeholder='Enter Your Number'
          ref={number}
          required
          onChange={e=>setEnterNumber(e.target.value)}
        />

        <button type='submit' className='game_button'>Enter</button>
        
      </form>
      <button  className='game_button1' onClick={newGame}>New Game</button>
  <div className='game_hint'>
  <div className='game_message'> message: <span>{message}</span></div>
     <div className='game_message'> Number Of Digit In Same Index :<span className='game_value'>{sameIndex}</span></div>
     <div className='game_message'> Number Of Digit Present:<span className='game_value'>{presentNumber}</span></div>
     <div className='game_message'> Number Of Digit Not Present:<span className='game_value'>{notPresentNumber}</span></div>
   <div ><h4 className='game_text'>Total Count :<span className='game_value'>{count}</span> </h4></div>
  </div>
    </div>

  </div>
  )
}

export default GamePage