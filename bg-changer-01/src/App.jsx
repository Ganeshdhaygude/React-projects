import { useState } from 'react'
import './App.css'


export default function App() {

  const[color ,setColor] = useState("pink")
  return (
    <>
    <div className='w-full h-screen duration-400 ' style={{backgroundColor: color}}>  
      
     
     <div className="flex-row p-1 rounded-xl  m-3 justify-center flex-wrap">
      <button className="bg-red-700 shadow-lg" onClick={()=>{setColor('brown')}}>brown </button>
      <button className="bg-green-500 shadow-lg" onClick={()=>{setColor('green')}}>Green </button>
      <button  className="bg-blue-500 shadow-lg" onClick={()=>{setColor('blue')}}>blue </button>
      <button className="bg-red-500 shadow-lg" onClick={()=>{setColor('red')}}>Red </button>
      <button className="bg-pink-500 shadow-lg" onClick={()=>{setColor('pink')}}>pink </button>
      <button className="bg-cyan-500 shadow-lg" onClick={()=>{setColor('black')}}>black </button>
      <button className="bg-purple-500 shadow-lg" onClick={()=>{setColor('purple')}}>purple </button>
      </div>
     </div>
     </>

)
}
