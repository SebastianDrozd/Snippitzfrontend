import React, { useEffect } from "react";
import "./Post.css";
import moment, { lang } from "moment";
import yo from "./web.png";
import { Link } from "react-router-dom";
import { postComment } from "./connections/Requests";
const Post = ({ title, language, description, createdAt, id,likes,author }) => {
  const date = moment(createdAt);
  console.log(createdAt);
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
    case "Python":
      pictureString = "python.png";
      break;
      case "Swift":
        pictureString = "swift.png";
  }

  return (
    <div className=" animate__animated animate__flipInX" >
     <div className="blog-card" style={{maxHeight: '18em', minHeight: '18em'}}>
    <div className="meta">
      <div className="photo" style={{backgroundImage: `url("./images/${pictureString}")`}}></div>
      <ul className="details">
        <li className="author"><a href="#">{author}</a></li>
        <li className="date">{moment(createdAt).fromNow()}</li>
        <li className="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>{title}</h1>
      <h2>{language}</h2>
      <p> {description}</p>
      <p className="read-more">
        <a href="#"><Link to={`/projects/${id}`}>View post</Link></a> 
      </p>
    </div>
  </div>
    </div>
  );
};

export default Post;
