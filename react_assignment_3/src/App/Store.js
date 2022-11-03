import { configureStore } from '@reduxjs/toolkit'
import hotelSlice from '../features/hotels/hotelSlice'
import registerSlice  from '../features/hotels/registerSlice'
import bookingSlice from '../features/hotels/bookingSlice'

export default configureStore({
  reducer: {hotels:hotelSlice,users:registerSlice,bookings:bookingSlice}
 
})