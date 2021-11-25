import { getAllPosts, savePost } from "../../../components/connections/Requests";
import { call, put } from "redux-saga/effects";
import { getPosts, setPosts } from "../../slices/postSlice";
export function* handleGetPosts() {
    console.log("this is handler in get")
    const response = yield call(getAllPosts)
    console.log("this is get handler response",response)
    const data = response;

    yield put(setPosts({ ...data }));
  
  }

  export function* handleSavePost(action) {
      console.log("action",action.payload)
    const response = yield call(savePost, action.payload);
    //console.log("REsponse", data);
    yield put(getPosts());
  }