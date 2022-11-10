import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {hotelAdd} from '../features/hotels/hotelSlice'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
const Add_hotel=()=> {


  const[name,setName]=useState("")
  const[location,setLocation]=useState("")
  const[tables,setTables]=useState("")
  const[contact,setContact]=useState("")
  
  const dispatch=useDispatch()

  const changHandle=()=>
    {
      if(name&&location&&tables&&contact)
      {
        dispatch(hotelAdd(name,location,tables,contact))
        setName("")
        setLocation("")
        setTables("")
        setContact("")

      }
      
    }
    

  

  return (<>
  <Navbar/>
  
      <section>
    <div className='container'>
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Hotel name</label>
     <input type='text'  name="name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}></input><br/> 
     </div>



     <div className="mb-3">
      <label htmlFor="location" className="form-label">Location  : </label>
     <input type='text' name="location" className="form-control" value={location} onChange={(e)=>setLocation(e.target.value)}></input> <br/>
     <div/>

     <div className="mb-3">
      <label htmlFor="tables" className="form-label">No. of Tables</label>
     <input type='text' name="tables" className="form-control" value={tables} onChange={(e)=>setTables(e.target.value)}></input> <br/>
    </div>

    <div className="mb-3">
      <label htmlFor="contact" className="form-label">Contact Details</label>
     <input type='text' name="contact" className="form-control" value={contact} onChange={(e)=>setContact(e.target.value)}></input> <br/>
     </div>

     <button onClick={changHandle}>Add a Hotel</button>

</div>
     


    
     
    </div>
    </section>
    </>
  )
}

export default Add_hotel
