import { getPosts, savePost } from "../slices/postSlice";
import { handleGetPosts, handleSavePost } from "./handlers/posts";
import { takeLatest, all } from "redux-saga/effects";
export function* watcherSaga() {
    yield all([
        takeLatest(getPosts.type, handleGetPosts),
        takeLatest(savePost.type, handleSavePost)
    ]);
  }