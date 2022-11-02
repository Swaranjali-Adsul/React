import React from 'react'
import { useSelector } from 'react-redux'
import {showHotels} from '../features/hotels/hotelSlice'
import User_navbar from './User_navbar'
const User_hotels = () => {
    const hotels=useSelector(showHotels)
    console.log(hotels)
    const hoteldata=hotels.filter(hotels=>hotels.id)
  return (
    <>
    <User_navbar/>
    <div className="container">
      
      <table className="table table-striped m-4">
      <thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Tables</th>
            <th>Contact</th>
        </tr>
      </thead>
      <tbody>
      {
      hoteldata.map((value) => {
        return (
      <tr>
            <td>{value.name}</td>
            <td>{value.location}</td>
            <td>{value.tables}</td>
            <td>{value.contact}</td>
            
        </tr>
        )
        
}
      )
        }
        
        
      </tbody>
      </table>
    </div>
    </>
  )
}

export default User_hotels
