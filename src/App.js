import React,{useState} from 'react'
import './App.css'
function App(){
  let store = 10
  let [counter, updateCounter] = useState(0)
  return (
    <div className='counter'>
      <button className='minus' disabled={counter===0} onClick={()=>{
        if(counter>0){
          updateCounter(counter-1)
        }
      }}>-</button>
      <p>{counter}</p>
      <button className='add' disabled={counter===store} onClick={()=>{
        if(counter<store){
          updateCounter(counter+1)
        }
      }}>+</button>
    </div>
  )
}

export default App