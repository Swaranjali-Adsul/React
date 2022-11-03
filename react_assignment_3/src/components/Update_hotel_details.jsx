import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hotelUpdated } from '../features/hotels/hotelSlice';
// import {showHotels} from '../features/hotels/hotelSlice'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { showHotels } from '../features/hotels/hotelSlice';
// import { toast } from 'react-toastify';

const Update_hotel_details = ({ match }) => {
    const { hotelId } = useParams();

    const hotel = useSelector(showHotels
)
    // console.log(hotel.id)
const hotelData=hotel.find(hotel=>hotel.id===hotelId)
console.log(hotelData)
    const [name, setName] = useState(hotelData.name);
    const [location, setLocation] = useState(hotelData.location);
    const [tables, setTables] = useState(hotelData.tables);
    const [contact, setContact] = useState(hotelData.contact);
    
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onNameChanged = e => setName(e.target.value);
    const onLocationChanged = e => setLocation(e.target.value);
    const onTablesChanged = e => setTables(e.target.value);
    const onContactChanged = e => setContact(e.target.value);
   
   

    const onSaveHotelClicked = () => {
        if (name && location && tables && contact) {
            dispatch(hotelUpdated({ id: hotelId, name, location, tables, contact }))
            alert('Updated Successfully!!');
            navigate(`/Existing_hotels`);
        }
    }

    return (
        <>
        <Navbar/>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <h2 className='text-center p-3'>Edit Hotel Data</h2>
                        <div className='row'>
                            <div className="col-md-6 shadow mx-auto" style={{ padding: 20 }}>
                                <form>
                                    <div className="form-group" style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Name:</label>
                                        <input type="text" id="hotelName" name="hotelName" value={name} placeholder='Hotel Name' className='form-control' onChange={onNameChanged}
                                        />
                                    </div>
                                    <div className="form-group" style={{ padding: 10 }}>
                                        <label className='form-label'>Hotel Address:</label>
                                        <input type="text" id="hotelAddress" name="hotelAddress" value={location} placeholder='Hotel Address' className='form-control' onChange={onLocationChanged}
                                        />
                                    </div>
                                    <div className="form-group" style={{ padding: 10 }}>
                                        <label className='form-label'>No. of Tables:</label>
                                        <input type="number" id="hotelContact" name="hotelContact" value={tables} placeholder='Hotel Contact Number' className='form-control' onChange={onTablesChanged}
                                        />
                                    </div>
                                    <div className='form-group' style={{ padding: 10 }}>
                                        <label className='form-label'>Contact Details:</label>
                                        <input type='email' id="hotelEmail" name="hotelEmail" value={contact} onChange={onContactChanged} placeholder='Hotel Email Address' className='form-control'
                                        />
                                    </div>
                                    
                                    <div className='form-group' style={{ padding: 10 }}>
                                        <input type='button' className='btn btn-outline-primary' onClick={onSaveHotelClicked} value='Update' style={{fontWeight: 'bold'}} />
                                        <input onClick={() => navigate(-1)} type="button" value="Back" className='btn btn-outline-secondary m-2' style={{fontWeight: 'bold'}} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update_hotel_details