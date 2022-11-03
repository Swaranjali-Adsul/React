import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {userAdd} from '../features/hotels/registerSlice'
import {Link} from 'react-router-dom'
import User_navbar from './User_navbar'
const Book_hotel=()=> {


  const[tables,setTables]=useState("")
  const[date,setDate]=useState("")
  
  
  

  const dispatch=useDispatch()

  const changHandle=()=>
    {
      if(tables&&date)
      {
        dispatch(userAdd(tables,date))
        setTables("")
        setDate("")
        

      }

      alert("Hotel Booked sucessfully")
     
    }
    

  

  return (<>
 

     <User_navbar/>
      <section>
    <div className='container'>
      <div className="mb-3">
      <label htmlFor="tables" className="form-label">No of Tables</label>
     <input type='text'  name="tables" className="form-control" value={tables} onChange={(e)=> setTables(e.target.value)}></input><br/> 
     </div>




     <div className="mb-3">
      <label htmlFor="date" className="form-label">Date </label>
     <input type='text' name="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}></input> <br/>
     <div/>

     

     <button onClick={changHandle}>Book Now</button>

</div>
     


     

     
    </div>
    </section>
    </>
  )
}

export default Book_hotel
