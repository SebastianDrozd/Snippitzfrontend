import React, { useState } from "react";
import moment from "moment";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import share from '../assets/share.svg'
import {
  deleteComment,
  getAllComments2,
  updateComment,
} from "./connections/Requests";
import { setComments } from "../redux/slices/postSlice";
import Swal from 'sweetalert2'
const Comment = ({ comment }) => {
  const id = useParams();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const [commentString, setCommentString] = useState(comment.commentMessage);
  const [wantsEdit, setWantsEdit] = useState(false);
  const handleDeleteComment = () => {
    Swal.fire({
      title: 'Confirm delete post',
      text: 'Are you sure you want to delete this post?',
      icon: 'error',
      confirmButtonText: 'Delete'
    }).then(() => {
      deleteComment(comment.id).then((response) => {
        getAllComments2(id.id).then((response) => {
          dispatch(setComments(response.data));
        });
    })
  
    });
  };
  const handleEditPost = () => {
    console.log(comment.id);
    setWantsEdit(true);
  };
  const handleUpdateComment = () => {
    console.log(comment.id)
    updateComment(comment.id, { commentMessage: commentString }).then(
      (response) => {console.log(response)
      window.location.reload()}
    );

    setWantsEdit(false);
  };
  return (
    <div>
      <li>
        <div className="comment-main-level animate__animated animate__zoomIn">
          <div className="comment-avatar">
            <img
              src={share}
              alt=""
            />
            {comment.id}
          </div>
          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name">
                <a href="http://creaticode.com/blog">{comment.snipUser}</a>
              </h6>

              <span>{moment(comment.dateCreated).fromNow()}</span>
              <i className="fa fa-reply"></i>
              <i className="fa fa-heart"></i>
            </div>
            {wantsEdit === false && (
              <div className="comment-content">{comment.commentMessage}</div>
            )}
            {wantsEdit && (
              <>
                {" "}
                <textarea
                  style={{ display: "inline" }}
                  value={commentString}
                  onChange={(e) => setCommentString(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Add comment..."
                ></textarea>
                <button onClick={handleUpdateComment}>update</button>
              </>
            )}
            {username === comment.snipUser ? (
              <div style={{ float: "right", marginBottom: 10 }}>
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ marginRight: "1em" }}
                  onClick={handleEditPost}
                >
                  Edit
                </button>

                <button
                  onClick={handleDeleteComment}
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default Comment;
