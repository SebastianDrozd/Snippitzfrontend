import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPosts } from "../redux/slices/postSlice";
import Banner from "./Banner";
import { getAllPosts } from "./connections/Requests";
import Pagination from "./Pagination";
import Post from "./Post";
import tech from '../assets/tech.jpg'
import "./PostListView.css";
import SearchBar from "./SearchBar";
import office from "../assets/office.svg";
import share from "../assets/share.svg";
import design from "../assets/design.svg";
import discuss from "../assets/discuss.svg";
import HeaderCta from "./HeaderCta";
import SideBar from "./SideBar";
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
      <HeaderCta />
      <br />
      <br />
      <div style={{display: 'flex',justifyContent: 'space-evenly',alignItems: 'center'}}>
      <div className="" style={{paddingLeft: '6em'}}>
            <img src={tech} width="600" height="400" style={{borderRadius: '20px'}}  alt="" />
          </div>
          <div style={{marginLeft:'2em'}}>
            <h2 style={{color: "rgb(102, 133, 255)"}}>Share all your best moments with your friends</h2>
            <br />
            <p style={{opacity:0.7}}>sfas lkajs lkahs lfkha slk halksf ahlks fhalks hflkashf akhs fklah sflka hsklfh askfha skfh  lkhf alsk f k sfalks fh</p>
          </div>
      </div>
      <br />
      <br />
      
      <br />
      <hr style={{ marginLeft: "3em" ,width: '75%', marginLeft: 'auto',marginRight: 'auto', color: 'rgb(170, 170, 170)'}} />
      <br />
      <div class="row" style={{ padding: "1em" }}>
        <div class="col-2">
          <SideBar />
        </div>
        <div class="col-9">
       
      <br />
       

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ float: "left", marginLeft: "3em" }}>
              <select
                class="form-select"
                style={{ display: "inline", float: "" }}
                id="cars"
              >
                <option value="volvo">Sort By</option>
                <option value="saab">Date Created</option>
              </select>
            </div>
            <SearchBar />
            {loggedIn === true && (
              <>
                <Link
                  id="create"
                  style={{
                    float: "right",
                    padding: "12em",
                    textAlign: "center",
                    color: "white",
                    marginLeft: "1em",
                    padding: 10,
                    borderRadius: 20,
                    height: "40px",
                    fontWeight: "bold",
                    backgroundColor: "rgb(102, 133, 255)",
                  }}
                  to="/create"
                >
                  Create Post
                </Link>
              </>
            )}
            {loggedIn === true && (
              <>
                <Link
                  id="create"
                  style={{
                    float: "right",
                    padding: "12em",
                    textAlign: "center",
                    color: "white",
                    marginLeft: "1em",
                    padding: 8,
                    borderRadius: 20,
                    height: "40px",
                    paddingLeft: "1em",
                    paddingRight: "1em",

                    color: "rgb(102, 133, 255)",
                    border: "3px solid rgb(102,133,255)",
                  }}
                  to="/myposts"
                >
                  My Profile
                </Link>
              </>
            )}
          </div>
          <br />
        
          <div
            style={{ marginLeft: "2em", paddingTop: "1em" }}
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
      </div>
    </div>
  );
};
