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
    
  }
})

// Action creators are generated for each case reducer function
export const { hotelAdd } = hotelSlice.actions
export const showHotels=(state)=>state.hotels.hotels

export default hotelSlice.reducer