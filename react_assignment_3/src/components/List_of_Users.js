import React from 'react'
import { useSelector } from 'react-redux'
import {showUsers} from '../features/hotels/registerSlice'
import Navbar from './Navbar'
const List_of_Users = () => {
    const users=useSelector(showUsers)
    console.log(users)
    const userdata=users.filter(users=>users.id)
  return (
    <>
    <Navbar/>
    <div className="container">
      
      <table className="table table-striped m-4">
      <thead>
        <tr>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
      </thead>
      <tbody>
      {
      userdata.map((value) => {
        return (
      <tr>
            <td>{value.namer}</td>
            <td>{value.mobr}</td>
            <td>{value.emailr}</td>
            <td>{value.addrr}</td>
            
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

export default List_of_Users
