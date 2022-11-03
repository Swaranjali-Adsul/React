import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"> Admin Portal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add_hotel">Add new hotel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/existing_hotels">Existing Hotels</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Update_hotel_details/hotelId">Update Hotel Details</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/List_of_bookings">Bookings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cancelled_bookings">Cancelled Bookings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/List_of_Users">List of Users</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Navbar
