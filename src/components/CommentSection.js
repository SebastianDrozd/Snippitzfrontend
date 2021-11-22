import moment from "moment";
import React, { useState, useEffect } from "react";
import CommentBox from "./CommentBox";
import "./CommentSection.css";
import Comment from "./Comment";
const CommentSection = ({ comments, id }) => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  );
  useEffect(() => {
    console.log(loggedIn);
  }, []);
  return (
    <div>
      <div className="comments-container">
        <h1 style={{ display: "inline" }}>Comments</h1>
        <p style={{ paddingLeft: 70, display: "inline" }}>Sort by </p>
        <select id="cars">
          <option value="volvo">Popularity</option>
          <option value="saab">Date Created</option>
        </select>
        {loggedIn == true ? <CommentBox id={id} /> : ""}

        <ul id="comments-list" className="comments-list">
          {comments && comments.map((comment) => <Comment comment={comment} />)}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
