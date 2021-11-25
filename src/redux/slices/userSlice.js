import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn : false,
  username : ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserStatus: (state,action) => {
        console.log(action)
        state.loggedIn = action.payload.loggedIn
        state.username = action.payload.username
    }
  },
})

// Action creators are generated for each case reducer function
export const {setUserStatus } = userSlice.actions

export default userSlice.reducer