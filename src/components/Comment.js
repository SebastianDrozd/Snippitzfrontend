import React from "react";
import moment from "moment";
const Comment = ({ comment }) => {
  return (
    <div>
      <li>
        <div className="comment-main-level">
          <div className="comment-avatar">
            <img
              src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"
              alt=""
            />
          </div>
          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name">
                <a href="http://creaticode.com/blog">{comment.snipUser}</a>
              </h6>
              <span>{moment(comment.createdAt).fromNow()}</span>
              <i className="fa fa-reply"></i>
              <i className="fa fa-heart"></i>
            </div>
            <div className="comment-content">{comment.commentMessage}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Comment;
