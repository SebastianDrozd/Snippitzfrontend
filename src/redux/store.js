import { configureStore ,combineReducers,
  } from '@reduxjs/toolkit'
import postReducer from '../redux/slices/postSlice'
import userReducer from '../redux/slices/userSlice'



const reducer = combineReducers({
  posts: postReducer,
    user: userReducer
});
export const store = configureStore({
   reducer,
   // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  })
//sagaMiddleware.run(watcherSaga);