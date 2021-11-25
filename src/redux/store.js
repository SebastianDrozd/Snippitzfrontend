import { configureStore , applyMiddleware,combineReducers,
  getDefaultMiddleware,} from '@reduxjs/toolkit'
import postReducer from '../redux/slices/postSlice'
import userReducer from '../redux/slices/userSlice'
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  posts: postReducer,
    user: userReducer
});
export const store = configureStore({
   reducer,
   // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  })
//sagaMiddleware.run(watcherSaga);