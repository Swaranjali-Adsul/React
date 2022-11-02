import { configureStore } from '@reduxjs/toolkit'
import hotelSlice from '../features/hotels/hotelSlice'
import registerSlice  from '../features/hotels/registerSlice'

export default configureStore({
  reducer: {hotels:hotelSlice,users:registerSlice}
 
})