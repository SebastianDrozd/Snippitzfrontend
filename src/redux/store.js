import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../redux/slices/postSlice'
export const store = configureStore({
  reducer: {
    posts: postReducer
  },
})