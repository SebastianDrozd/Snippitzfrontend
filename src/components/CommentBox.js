import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../redux/slices/postSlice";
import "./CommentBox.css";
import { getAllComments2, postComment } from "./connections/Requests";
const CommentBox = ({ id }) => {
  const dispatch = useDispatch();
  // {loggedIn == true? <div> <textarea onChange={(e) => {setComment(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="50" /> <button onClick={handleSumbit}>post comment</button></div> : ""}
  const [comment, setComment] = useState("");
  const username = useSelector((state) => state.user.username);
  const handleSumbit = () => {
    postComment(
      {
        commentMessage: comment,
        dateCreated: Date.now(),
        snipUser: username,
      },
      id
    ).then((reponse) => {
      console.log("id ====", id);
      getAllComments2(id).then((response) => {
        dispatch(setComments(response.data));
      });
    });
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
