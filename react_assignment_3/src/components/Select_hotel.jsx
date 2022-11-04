import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotelUpdated } from '../features/hotels/hotelSlice';

import { useNavigate, useParams,Link } from 'react-router-dom';
import Navbar from './Navbar';
import { showHotels } from '../features/hotels/hotelSlice';


const Select_hotel = ({ match }) => {
    const { hotelId } = useParams();

    const hotel = useSelector(showHotels
)
    
const hotelData=hotel.find(hotel=>hotel.id===hotelId)
console.log("hotelData"+hotelData)
   

    

    return (
        <>
        <Navbar/>
        <div className='container'>
            <table className="table table-striped m-4">
              <thead>
                <tr className="bg-secondary text-light">
                  <th>Name</th>
                  <th>Location</th>
                  <th>Tables</th>
                  <th>Contact</th>
                  <th>Booking Link</th>
                </tr>
              </thead>
              <tbody>
              
      
      <tr>
            <td>{hotelData.name}</td>
            <td>{hotelData.location}</td>
            <td>{hotelData.tables}</td>
            <td>{hotelData.contact}</td>
            <td>
            <Link to={`/Book_hotel/${hotelData.id}`}>Book Now..!!</Link>
            </td>
            
        </tr>
        
        

      

              </tbody>
            </table>
            </div>
            </>
                                   
    )
}

export default Select_hotel