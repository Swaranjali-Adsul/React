import React,{useState} from 'react'
import Navbar from './Navbar'

const List_of_bookings = () => {

    const BookingList=[
        {
            userName:"Devyani",
            email:"devyani@gmail.com",
            hotelName:"CityInn",
            tablecount:3,
        },
        {
            userName:"Sandhya",
            email:"sandhya@gmail.com",
            hotelName:"Sahara",
            tablecount:2,
        },
        {
            userName:"Abhi",
            email:"abhi@gmail.com",
            hotelName:"Niwant",
            tablecount:5
        },
        {
          userName:"Ram",
          email:"ram@gmail.com",
          hotelName:"Taj",
          tablecount:2
      }
    ]

    let [BookingData,setBookingData]=useState([...BookingList])


  return (
    <div>
        <Navbar/>
        <div>
        <div className="container">
             <h1 className="text-center bg-secondary  rounded p-2 text-light mt-5">Bookings of Hotel</h1>


             
             <div className='mt-5'>
          <table className="table table-striped">
            <thead><tr className="bg-secondary text-light">
              <th>Sr.No</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Hotel Name</th>
              <th>Table Count</th>
              </tr></thead>
              <tbody>
                {
                  BookingData.map((val,index)=>{
                    return <tr key={index}>
                      <td>{index+1}</td>
                      <td>{val.userName}</td>
                      <td>{val.email}</td>
                      <td>{val.hotelName}</td>
                      <td>{val.tablecount}</td>
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

export default List_of_bookings