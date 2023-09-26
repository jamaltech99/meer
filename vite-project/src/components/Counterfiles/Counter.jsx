import React from 'react'
import { useState } from 'react'
import './Counter.css'

function Counter() {
    const [counter,setCounter] =useState(0);

    const add=()=>{
      if(counter===15){
       alert('Stock reach for single customer ')
      }
      else{
        setCounter(counter+1);
      }
       
    };

    const remove=()=>{
      if(counter===0){
      }
      else{
        setCounter(counter-1);
      }
       
    };
  return (
    <div className=' d-flex counter'>
        {/* increment */}
        <button className='counter-button' onClick={add}><i className="fa-sharp fa-solid fa-plus fa-sm"></i></button>
        {/* counter */}
        <h5>{counter}</h5>
        {/* decrement */}
        <button className='counter-button' onClick={remove}><i className="fa-sharp fa-solid fa-minus fa-sm"></i></button>
    </div>
  )
}

export default Counter