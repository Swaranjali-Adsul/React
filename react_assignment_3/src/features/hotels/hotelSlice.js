import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState={hotels:[]};
export const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    hotelAdd:
    {
        reducer(state,action)
        {
            state.hotels.push(action.payload)
        },
        prepare(name,location,tables,contact)
        {
          return {payload:{id:nanoid(),name,location,tables,contact}}
        }
    
    }
    ,
        hotelUpdated(state, action) {
            const {id, name, location, tables, contact} = action.payload
            const existingHotel = state.hotels.find(hotel => hotel.id === id) 
            if(existingHotel) {
                existingHotel.name = name;
                existingHotel.location = location;
                existingHotel.tables = tables;
                existingHotel.contact = contact;
                
            }
        }
    
  }
})

// Action creators are generated for each case reducer function
export const { hotelAdd,hotelUpdated } = hotelSlice.actions
export const showHotels=(state)=>state.hotels.hotels

export default hotelSlice.reducer