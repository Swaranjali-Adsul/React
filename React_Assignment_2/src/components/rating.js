
import React, {useState} from 'react'

const Rating = () => {

let [rating, setRating] = useState(0)
let [str, setStr] = useState('')

const readRating = (e) => {
     setRating(e.target.value)
 }
 
 const showRating = () => {
if(rating <=5 && rating >0){
 let i=0;
while(i<rating) {
 str += '*'
  i+=1
}
setStr(str)
str=''
}

else{
 alert('Invalid input!!!')
}
 }


 return(
 <div>
  <h1 align="center">Star Rating App</h1><br/><br/>
 <div>
    {/* <div>
     <label htmlFor=''>Enter Rating No.  :</label>
    <input onChange={readRating} type='number' /></div> */}
   <div><br/><br/> 
   <div className="mb-3">
  <label htmlFor="num" className="form-label">Enter Rating No.</label>
  <input type="email" className="form-control" id="num" placeholder="Enter numbers 1 to 5"  onChange={readRating}/>
</div>
   
  <button className='btn btn-outline-success mb-3' onClick={showRating}>show Star ratings:</button><br/><br/>
  <h3>{str}</h3>
  </div>
  <h3>{str=''}</h3>
  </div>
  
 </div>

 )
}
export default Rating

