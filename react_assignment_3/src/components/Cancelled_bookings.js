import React,{useState} from 'react'

import Navbar from './Navbar'
const Cancelled_bookings = () => {

    const CancelBookings=[
        {
            userName:"Swaranjali",
            email:"swara@gmail.com",
            hotelName:"Nisarg",
            reason:"Not willing to come",
        },
        {
            userName:"Onkar",
            email:"onkar@gmail.com",
            hotelName:"Sahara",
            reason:"Travelling Issue...",
        },
        {
            userName:"Saloni",
            email:"saloni@gmail.com",
            hotelName:"Taj",
            reason:"Weather condition"
        },
        {
          userName:"Raj",
          email:"raj@gmail.com",
          hotelName:"Taj",
          reason:"Financial Condition"
      }
    ]

    let [cancelData,setCancelData]=useState([...CancelBookings])


  return (
    <div>
        <Navbar/>
        <div>
        <div className="container">
             <h1 className="text-center bg-secondary  rounded p-2 text-light mt-5">Cancelled Bookings</h1>


             {/* Canceled Bookings     */}
             <div className='mt-5'>
          <table className="table table-striped">
            <thead><tr className="bg-secondary text-light">
              <th>Sr.No</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Hotel Name</th>
              <th>Reason Of cancelation</th>
              </tr></thead>
              <tbody>
                {
                  cancelData.map((val,index)=>{
                    return <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.userName}</td>
                      <td>{val.email}</td>
                      <td>{val.hotelName}</td>
                      <td>{val.reason}</td>
                    </tr>
                  })
                }
              </tbody>
          </table>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Cancelled_bookings