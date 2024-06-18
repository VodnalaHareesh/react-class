import React,{useState} from 'react'

export default function Input() {
  const[userName,setUserName]=useState(' ')
function submit(){
  console.log("this is from submit function",userName)
}
function handleChange(e){
  //console.log(e.target.value)
  setUserName(e.target.value)
}
  return (
    <div>
      <p>   this is  {userName} </p>
      <input onChange={handleChange} placeholder='enter name'/>
      <button onClick={submit}> submit</button> 
      {/* submit function is calling in  the button 
        when we are clicked  submit button the data in the function will print*/}
    </div>
  )
}