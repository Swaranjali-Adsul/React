import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {userAdd} from '../features/hotels/registerSlice'
import {Link} from 'react-router-dom'
import User_navbar from './User_navbar'
const Registration=()=> {


  const[namer,setNamer]=useState("")
  const[mobr,setMobr]=useState("")
  const[emailr,setEmailr]=useState("")
  const[addrr,setAddr]=useState("")
  const[passr,setPassr]=useState("")
  
  

  const dispatch=useDispatch()

  const changHandle=()=>
    {
      if(namer&&mobr&&emailr&&addrr&&passr)
      {
        dispatch(userAdd(namer,mobr,emailr,addrr,passr))
        setNamer("")
        setMobr("")
        setEmailr("")
        setAddr("")
        setPassr("")


      }

      alert("You registred sucessfully")
     
    }
    

  

  return (<>
 

     <User_navbar/>
      <section>
    <div className='container'>
      <div className="mb-3">
      <label htmlFor="namer" className="form-label">Name</label>
     <input type='text'  name="namer" className="form-control" value={namer} onChange={(e)=> setNamer(e.target.value)}></input><br/> 
     </div>




     <div className="mb-3">
      <label htmlFor="mobr" className="form-label">Mobile No. </label>
     <input type='text' name="mobr" className="form-control" value={mobr} onChange={(e)=>setMobr(e.target.value)}></input> <br/>
     <div/>

     <div className="mb-3">
      <label htmlFor="emailr" className="form-label">Email</label>
     <input type='text' name="emailr" className="form-control" value={emailr} onChange={(e)=>setEmailr(e.target.value)}></input> <br/>
    </div>

    <div className="mb-3">
      <label htmlFor="addrr" className="form-label">Address</label>
     <input type='text' name="addrr" className="form-control" value={addrr} onChange={(e)=>setAddr(e.target.value)}></input> <br/>
     </div>
     <div className="mb-3">
      <label htmlFor="passr" className="form-label">Password</label>
     <input type='text' name="passr" className="form-control" value={passr} onChange={(e)=>setPassr(e.target.value)}></input> <br/>
     </div>

     <button onClick={changHandle}>Register Now</button>

</div>
     


     

     
    </div>
    </section>
    </>
  )
}

export default Registration
