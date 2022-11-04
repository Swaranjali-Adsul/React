import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState={users:[]};
export const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    userAdd:
    {
        reducer(state,action)
        {
            state.users.push(action.payload)
        },
        prepare(tables,date)
        {
          return {payload:{id:nanoid(),tables,date}}
        }
    
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { userAdd } = bookingSlice.actions
export const showBookings=(state)=>state.bookings.bookings

export default bookingSlice.reducer