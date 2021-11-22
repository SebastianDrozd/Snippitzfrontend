import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Post from "./Post";

import "./PostListView.css";
import SearchBar from "./SearchBar";
export const PostListView = ({ posts }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log("whats inside localstorage", localStorage.getItem("loggedIn"));
    const result = localStorage.getItem("loggedIn");
    setLoggedIn(JSON.parse(result));
    console.log(loggedIn);
  }, []);
  const handleLogout = () => {
    setLoggedIn(!loggedIn);
    localStorage.setItem("loggedIn", false);
  };
  return (
    <div>
      <div className="create-post">
        <br />
        <br />

        
        <br />
        <div
          style={{
            padding: "3.5em",
            backgroundColor: "#5863F8",
            marginLeft: 100,
            border: "1px solid white",
            borderRadius: "50px",
          }}
        >
          <h1
            style={{
              color: "white",
              textAlign: "center",
              fontStyle: "bold",
              fontWeight: "bold",
            }}
          >
            View, share, edit, and create all in one place
          </h1>
        </div>
        <br />
              <br />
      <SearchBar/>
        <br />
            <br />
            <br />
        <h3 style={{ display: "inline", paddingLeft: 70, color: "#5863F8",fontWeight: 'bold' }}>
          Most popular posts
        </h3>
        {loggedIn == true ? (
          <Link
            style={{
              color: "white",
              float: "right",
              padding: 20,
              borderRadius: 20,
              border: "1px solid slateblue",
              backgroundColor: "#5863F8",
            }}
            to="/create"
          >
            Create Post
          </Link>
        ) : (
          <div style={{ textAlign: "right" }}>
            <p>Want to create a post?</p>
            <Link to="/login">Sign in</Link>
            <p>No account?</p>
            <Link to="/signup">Sign up</Link>
          </div>
        )}
        <br />
        <br />
        <p style={{ paddingLeft: 70, display: "inline" }}>Sort by </p>
        <select style={{ display: "inline" }} id="cars">
          <option value="volvo">Popularity</option>
          <option value="saab">Date Created</option>
        </select>
      </div>

      <div
        style={{ marginLeft: "2em", paddingTop: "1em" }}
        class="container-fluid"
      >
        <div class="row " style={{ justifyContent: "space-evenly" }}>
          {posts &&
            posts.map((post) => (
              <div class="col-5" style={{ marginLeft: 0, marginTop: 20 }}>
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
