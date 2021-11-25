import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts : [],
  sortChoice: "",
  comments : []
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: () => {
      console.log('inside')
    },
    setPosts: (state,action) => {

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("Thisis set posts action", action.payload)
      state.posts = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    savePost: () => {},
    setSortChoice : (state,action) => {
      console.log("action reducer",action.payload)
      state.sortChoice = action.payload
    },
    setComments: (state, action) => {
      console.log("this is post reducer",action)
      state.comments = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPosts, decrement, incrementByAmount,getPosts,savePost,setSortChoice ,setComments} = postSlice.actions

export default postSlice.reducer