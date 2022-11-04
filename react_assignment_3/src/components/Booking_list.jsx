import React from 'react'
import { useSelector } from 'react-redux'
import {showBookings} from '../features/hotels/bookingSlice'
import Navbar from './Navbar'
const Booking_list = () => {
    const bookings=useSelector(showBookings)
    console.log("bookings"+bookings)
    const bookingdata=bookings.filter(bookings=>bookings.id)
  return (
    <>
    <Navbar/>
    <div className="container">
      
      <table className="table table-striped m-4">
      <thead>
        <tr>
            <th>Tables</th>
            <th>Date </th>
            
        </tr>
      </thead>
      <tbody>
      {
      bookingdata.map((value) => {
        return (
      <tr>
            <td>{value.tabled}</td>
            <td>{value.date}</td>
            
            
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

export default Booking_list
