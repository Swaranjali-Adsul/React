import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState={users:[]};
export const registerSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdd:
    {
        reducer(state,action)
        {
            state.users.push(action.payload)
        },
        prepare(namer,mobr,emailr,addrr,passr)
        {
          return {payload:{id:nanoid(),namer,mobr,emailr,addrr,passr}}
        }
    
    }
    
  }
})

// Action creators are generated for each case reducer function
export const { userAdd } = registerSlice.actions
export const showUsers=(state)=>state.users.users

export default registerSlice.reducer