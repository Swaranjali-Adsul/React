import React,{useState} from 'react'

function Counter() {
    const [num,setNum]=useState(0)
    const Inc=()=>
    {
        if(num<10)
        {
      setNum(num+1)
        }
    }

    const Dec=()=>
    { 
         if(num>0)
        {
        setNum(num-1)
        }
    }
  return (
    <>
    <h1 align="center">Counter App</h1>
    <div>
      <button onClick={Inc}>+</button>
      <h1>{num}</h1>
      <button onClick={Dec}>-</button>

    </div>
    </>
  )
}

export default Counter



