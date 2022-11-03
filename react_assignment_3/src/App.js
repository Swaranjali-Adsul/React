import React,{useState} from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login';
import Registration from './components/Registration'
import Add_hotel from './components/Add_hotel'
import Existing_hotels from './components/Existing_hotels';
import Update_hotel_details from './components/Update_hotel_details';
import List_of_bookings from './components/List_of_bookings';
import Cancelled_bookings from './components/Cancelled_bookings';
import List_of_Users from './components/List_of_Users'

import {  Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import User_navbar from './components/User_navbar';
import User_hotels from './components/User_hotels'




function App() {
  
  return (
    <div className="App">
      
        
          <Routes>
            
           <Route path='/' element={<Home />}></Route> 
           <Route path='/Navbar' element={<Navbar />}></Route> 
           <Route path='/User_hotels' element={<User_hotels />}></Route> 
          
           <Route path='/User_navbar' element={<User_navbar />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/Add_hotel' element={<Add_hotel />}></Route>
          <Route path='/Existing_hotels' element={<Existing_hotels />}></Route>
          <Route path='/Update_hotel_details/:hotelId' element={<Update_hotel_details />}></Route>
          <Route path='/List_of_bookings' element={<List_of_bookings />}></Route>
          <Route path='/Cancelled_bookings' element={<Cancelled_bookings/>}> path</Route>
          <Route path='/List_of_users' element={<List_of_Users />}></Route>
          </Routes>
           {/* <Navbar/>  */}
          
      
</div>
  );
}

export default App;
