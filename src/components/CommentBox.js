import React, { useState } from "react";
import "./CommentBox.css";
import { postComment } from "./connections/Requests";
const CommentBox = ({ id }) => {
  // {loggedIn == true? <div> <textarea onChange={(e) => {setComment(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="50" /> <button onClick={handleSumbit}>post comment</button></div> : ""}
  const [comment, setComment] = useState("");
  const handleSumbit = () => {
    postComment(
      {
        commentMessage: comment,
        dateCreated: Date.now(),
        snipUser: localStorage.getItem("username"),
      },
      id
    );
  };
  return (
    <div>
      <div className="comments">
        <div className="comment-wrap">
          <div className="photo">
            <div className="avatar"></div>
          </div>
          <div className="comment-block">
            <form action="" style={{ display: "inline" }}>
              <textarea
                style={{ display: "inline" }}
                onChange={(e) => setComment(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Add comment..."
              ></textarea>
            </form>
            <button
              onClick={handleSumbit}
              style={{ display: "inline", float: "right" }}
              className="sub-button"
            >
              Post comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
