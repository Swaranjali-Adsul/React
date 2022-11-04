import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {showHotels} from '../features/hotels/hotelSlice'
import Navbar from './Navbar'

const Existing_hotels = () => {
    const hotels=useSelector(showHotels)
    console.log(hotels)
    const hoteldata=hotels.filter(hotels=>hotels.id)
  return (
    <>
    <Navbar/>
    <div className="container">
      
      <table className="table table-striped m-4">
      <thead>
        <tr className="bg-secondary text-light">
            <th>Name</th>
            <th>Location</th>
            <th>Tables</th>
            <th>Contact</th>
            <th>Action</th>
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
            <td>
              <Link to={`/Update_hotel_details/${value.id}`}>Update hotel details</Link>
            </td>
            
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

export default Existing_hotels
