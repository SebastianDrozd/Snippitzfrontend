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
import office from '../assets/office.svg'
import share from '../assets/share.svg'
import design from '../assets/design.svg'
import discuss from '../assets/discuss.svg'
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
    <div className="main-container">
     
     

      <br />
      <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-evenly'}}>
        <div style={{display: 'flex', flexDirection: 'column',padding: '7em'}}>
      <p className="home-message">Check out all the newest coolest posts by users just like you!</p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Bibendum enim facilisis gravida neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis vel eros donec ac.</p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Create, post, save ,edit all your favorite code snippitz. At Snippitz.IO, keep all your favorite functions together in one place for world to see! </p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Bibendum enim facilisis gravida neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis vel eros donec ac.</p>
      
      </div>
      <img className="cta-img" src={office} height="400" width="350" alt="" />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly',paddingLeft: '9em',paddingRight: '7em'}}>
        <div className="cta-category-item" style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
          <h4 className="cta-header">Create</h4>
          <p className="cta-p">Create a one of a kind function for all the people to see. What you put in is what you get out. </p>
        <img src={share} height="150" width="150" alt="" />
        </div>
        <div className="cta-category-item"  style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
          <h4 className="cta-header">Share</h4>
          <p className="cta-p">Create a one of a kind function for all the people to see. What you put in is what you get out. </p>
        <img src={design} height="150" width="150" alt="" />
        </div>
        <div className="cta-category-item" style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
          <h4 className="cta-header">Discuss</h4>
          <p className="cta-p">Create a one of a kind function for all the people to see. What you put in is what you get out. </p>
        <img src={discuss} height="150" width="150" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div style={{ float: "left",marginLeft: '3em' }}>

        <select class="form-select" style={{ display: "inline", float: "" }} id="cars">
          <option value="volvo">Sort By</option>
          <option value="saab">Date Created</option>
        </select>
        
       
      </div>
      <SearchBar />
      {loggedIn === true && (
        <>
          <Link id="create"
            style={{
             float: 'right',
              padding: '6em',
              textAlign: "center",
              color: "white",
              marginLeft: "1em",
              padding: 10,
              borderRadius: 20,
              height: '40px',
              fontWeight: "bold",
              backgroundColor: "rgb(102, 133, 255)",
            }}
            to="/create"
          >
            Create Post
          </Link>
        
        </>
      )}</div>
     
      <br />
            <hr style={{marginLeft: '3em'}} />
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
              <div class="col-3" style={{ marginLeft: 0, marginTop: 20 }}>
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
