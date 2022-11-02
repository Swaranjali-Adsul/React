
import './App.css';
import React from 'react';
import Login from './components/login'
import Registration from './components/registration'
import Counter from './components/counter'
import Rating from './components/rating'

function App() {

   

  return (
    <>
    <h4>For login and registration you can see output on console</h4>
   <Login/>
   <Registration/>
   <Counter/>
   <Rating />
   </>
  );
}

export default App;
