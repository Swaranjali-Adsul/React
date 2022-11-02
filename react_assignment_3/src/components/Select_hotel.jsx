import React from 'react'
import { useSelector } from 'react-redux'
import {showHotels} from '../features/hotels/hotelSlice'
const Select_hotel = () => {
    const hotels=useSelector(showHotels)
    console.log(hotels)
    const hoteldata=hotels.filter(hotels=>hotels.id)
  return (
   <>
   <div className="mb-3">
  <label htmlFor="mail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="mail" placeholder="abc@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
</div>


<input className="btn btn-primary" type="submit" value="Login" onClick={showDetails}></input>
   </>
  )
}

export default Select_hotel
