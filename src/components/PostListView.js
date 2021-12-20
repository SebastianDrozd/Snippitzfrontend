import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPosts, setSortChoice } from "../redux/slices/postSlice";
import Banner from "./Banner";
import { getAllPosts, getPostQueryable } from "./connections/Requests";
import Pagination from "./Pagination";
import Post from "./Post";
import tech from "../assets/tech.jpg";
import "./PostListView.css";
import SearchBar from "./SearchBar";
import office from "../assets/office.svg";
import share from "../assets/share.svg";
import design from "../assets/design.svg";
import discuss from "../assets/discuss.svg";
import HeaderCta from "./HeaderCta";
import SideBar from "./SideBar";
import robot from "../assets/robot.png";
import post from "../assets/post.svg";
import { Parallax } from 'react-parallax';
export const PostListView = ({ posts }) => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const sortChoice = useSelector((state) => state.posts.sortChoice);
  const [sortStringChoice,setSortStringChoice] = useState("")
  useEffect(() => {
    getAllPosts().then((response) => {
      dispatch(setPosts(response.data));
    });
  }, [dispatch]);

  const handleSortChoice = (e) => {
    var choice = e.target.value;
      console.log(choice)
    if(choice == "Date Created"){
      getPostQueryable("createdAt").then(response => dispatch(setPosts(response.data)))
    }
    else if(choice == "A-Z"){
      //handle alphabetically
      getPostQueryable("title").then(response => dispatch(setPosts(response.data)))
    }
  }
  return (
    <div className="main-container">
      <br />
      <HeaderCta />
      <br />
      <br />
      <div
        className="outer-container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="header-image-container" style={{ paddingLeft: "6em" }}>
          <img
            src={tech}
            width="600"
            height="400"
            style={{ borderRadius: "20px" }}
            alt=""
          />
        </div>
        <div style={{ marginLeft: "2em" }}>
          <h2 style={{ color: "rgb(102, 133, 255)" }}>
            Share all your best moments with your friends
          </h2>
          <br />
          <p style={{ opacity: 0.7 }}>
            sfas lkajs lkahs lfkha slk halksf ahlks fhalks hflkashf akhs fklah
            sflka hsklfh askfha skfh lkhf alsk f k sfalks fh
          </p>
          <p style={{ opacity: 0.7 }}>
            sfas lkajs lkahs lfkha slk halksf ahlks fhalks hflkashf akhs fklah
            sflka hsklfh askfha skfh lkhf alsk f k sfalks fh
          </p>
          <p style={{ opacity: 0.7 }}>
            Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec
            tincidunt praesent semper feugiat. Bibendum enim facilisis gravida
            neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis
            vel eros donec ac
          </p>
        </div>
      </div>
      <br />
      <br />

      <br />
      <hr
        style={{
          marginLeft: "3em",
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "rgb(170, 170, 170)",
        }}
      />
      <br />
      <div class="row" style={{ padding: "1em" }}>
        <div class="col-2 sidebar">
          <SideBar />
        </div>
        <div class="col-9">
          <div className="header-outline">
          <br />
          <div style={{ padding: "1em" }}>
            <img className="post-img" src={post} alt="" />
            <hr
        style={{
          marginLeft: "3em",
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          color: "rgb(170, 170, 170)",
        }}
      />

          </div>
        {!loggedIn &&  <h4 style={{textAlign: 'center',opacity: '0.8',fontWeight: 'bold'}}>Create an account today to make your first post!</h4>}  

          <div
            className="helpers-wrap"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="helper-buttons">
              <select  onChange={handleSortChoice} class="form-select">
                <option value="volvo">Sort By</option>
                <option value="Date Created">Date Created</option>
                <option value="A-Z">A-Z</option>
              </select>
            </div>

            {loggedIn === true && (
              <>
                <Link
                className="helper-buttons"
                  id="create"
                  style={{
                    color: "white",
                    padding: 10,
                    borderRadius: 5,
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
                className="helper-buttons"
                  id="create"
                  style={{
                    color: "white",

                    padding: 8,
                    borderRadius: 5,

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
          </div>
          <br />
          <div
            style={{ marginLeft: "2em", paddingTop: "1em" }}
            class="container-fluid"
          >
            {sortChoice}
            <div id="yoyo2" class="row post-list-wrapper" style={{ justifyContent: "space-evenly" }}>
              {posts.length === 0 ? (
                <h3 style={{ textAlign: "center" }}>
                  There are no posts to display{" "}
                </h3>
              ) : (
                ""
              )}
              {posts &&
                posts.map((post) => (
                  <div class="col-6" style={{ marginLeft: 0, marginTop: 20 }}>
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
