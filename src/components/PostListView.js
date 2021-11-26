import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPosts } from "../redux/slices/postSlice";
import Banner from "./Banner";
import { getAllPosts } from "./connections/Requests";
import Pagination from "./Pagination";
import Post from "./Post";

import "./PostListView.css";
import SearchBar from "./SearchBar";
export const PostListView = ({ posts }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const sortChoice = useSelector((state) => state.posts.sortChoice);
  useEffect(() => {
    getAllPosts().then((response) => {
      dispatch(setPosts(response.data));
    });
  }, [dispatch]);
  return (
    <div>
      <br />
      <Banner title="Newest Posts" /> 
      <br />
      {loggedIn === true && (
        <>
          <Link
            style={{
              float: "right",
              textAlign: "center",
              color: "white",
              marginLeft: "1em",
              padding: 20,
              borderRadius: 20,
              fontWeight: "bold",
              backgroundColor: "rgb(102, 133, 255)",
            }}
            to="/create"
          >
            Create Post
          </Link>
          <br />
        </>
      )}

      <br />
      
      <SearchBar />
      <div style={{ float: "right" }}>

        <select class="form-select" style={{ display: "inline", float: "" }} id="cars">
          <option value="volvo">Sort By</option>
          <option value="saab">Date Created</option>
        </select>
        <br />
      </div>

     
      <br />

      <div
        style={{ marginLeft: "3em", paddingTop: "1em" }}
        class="container-fluid"
      >
        {sortChoice}
        <div class="row " style={{ justifyContent: "space-evenly" }}>
          {posts.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>
              There are no posts to display{" "}
            </h3>
          ) : (
            ""
          )}
          {posts &&
            posts.map((post) => (
              <div class="col-4" style={{ marginLeft: 0, marginTop: 20 }}>
                <Post
                  title={post.title}
                  language={post.language}
                  description={post.description}
                  createdAt={post.createdAt}
                  id={post.id}
                  likes={post.likes}
                  author={post.author}
                ></Post>
              </div>
            ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};
