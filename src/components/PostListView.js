import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Post from "./Post";

import "./PostListView.css";
export const PostListView = ({ posts }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log("whats inside localstorage", localStorage.getItem("loggedIn"));
    const result = localStorage.getItem("loggedIn");
    console.log(result);
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
      
       
        

        {loggedIn == true ? <button style={{float: 'right'}} onClick={handleLogout}>Logout</button> : ""}
        <br />
        <div style={{padding: "4em", backgroundColor: '#5863F8', marginLeft: 50, border: '1px solid white', borderRadius: '30px'}}>
          <h1 style={{color: 'white', textAlign: 'center',fontStyle: 'bold',fontWeight: 'bold'}}>All your favorite snipits in one place!</h1>
        </div>
        <br />
        
        <div class="input-group mb-2" style={{ marginLeft: 60 }}>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color: '#bbbfff'}}
          >
            Dropdown
          </button>
          
        </div>
        <br />
        
        <h3 style={{ display: "inline", paddingLeft: 70 }}>
          Most popular posts
        </h3>
        {loggedIn == true ? (
          <Link style={{ float: "right", padding: 20, borderRadius: 20, border: '1px solid slateblue' }} to="/create">
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
        <select style={{display: 'inline'}} id="cars">
          <option value="volvo">Popularity</option>
          <option value="saab">Date Created</option>
        </select>
       
      </div>
     
      <div
        style={{ marginLeft: "2em", paddingTop: "3em" }}
        class="container-fluid"
      >
        <div class="row row-items">
          {posts &&
            posts.map((post) => (
              <div class="col-3" style={{ marginLeft: 10, marginTop: 20 }}>
                <Post
                  title={post.title}
                  language={post.language}
                  description={post.description}
                  createdAt={post.createdAt}
                  id={post.id}
                  likes = {post.likes}
                  author= {post.author}
                ></Post>
              </div>
            ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};
