import React from "react";
import "./Post.css";
import moment from "moment";

import { Link } from "react-router-dom";
import { deletePos2t } from "./connections/Requests";
import { useNavigate } from "react-router";
const Post = ({
  title,
  language,
  description,
  createdAt,
  id,
  likes,
  author,
  showButtons,
}) => {
  const navigate = useNavigate();

  var pictureString = "";

  switch (language) {
    case "Raspberry Pi":
      pictureString = "rasp.png";
      break;
    case "JavaScript":
      pictureString = "javascript.png";
      break;
    case "Java":
      pictureString = "java.jpg";
      break;
    case "C++":
      pictureString = "cpp.png";
      break;
    case "Objective C":
      pictureString = "objc.png";
      break;
    case "HTML/CSS":
      pictureString = "htmlcss.jpg";
      break;
    case "Python":
      pictureString = "python.png";
      break;
    case "Swift":
      pictureString = "swift.png";
      break;
    default: 
      pictureString = "swift.png"
  }

  const handleEditPost = () => {
    navigate(`/snippitz/${id}`);
  };

  const handleDeletePost = () => {
    deletePos2t(id).then((response) => console.log(response));
  };

  return (
    <div className=" animate__animated animate__flipInX">
      <div
        className="blog-card"
        style={{ maxHeight: "18em", minHeight: "18em" }}
      >
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url("./images/${pictureString}")` }}
          ></div>
          <ul className="details">
            <li className="author">
              <a href="/home">{author}</a>
            </li>
            <li className="date">{moment(createdAt).fromNow()}</li>
            <li className="tags">
              <ul>
                <li>
                  <a href="/home">Learn</a>
                </li>
                <li>
                  <a href="/home">Code</a>
                </li>
                <li>
                  <a href="/home">HTML</a>
                </li>
                <li>
                  <a href="/home">CSS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <h2>{language}</h2>
          <p> {description}</p>
          <p className="read-more">
            <a href="/home">
              <Link to={`/snippitz/${id}`}>View post</Link>
            </a>
          </p>
          {showButtons && (
            <>
              <br />{" "}
              <button
                type="button"
                class="btn btn-success"
                style={{ marginRight: "1em" }}
                onClick={handleEditPost}
              >
                Edit
              </button>
              <button
                onClick={handleDeletePost}
                type="button"
                class="btn btn-danger"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
