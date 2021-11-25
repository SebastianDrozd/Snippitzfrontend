import React,{useEffect,useState} from "react";
import { getAllPosts } from "../components/connections/Requests";
import { PostListView } from "../components/PostListView";
import SideBar from "../components/SideBar";
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from "../redux/slices/postSlice";

const PostView = () => {
  const dispatch = useDispatch()  
  const post2 = useSelector((state) => state.posts.posts)
   
    useEffect(() => {
        getAllPosts().then((response) => {
          
            dispatch(setPosts(response.data))
          
            //console.log(posts)
        })
    },[])
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <SideBar />
            
          </div>
          <div class="col-9">
            <PostListView posts = {post2}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
