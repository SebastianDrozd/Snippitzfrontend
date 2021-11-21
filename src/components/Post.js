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
    <div class="card animate__animated animate__flipInX">
      <div class="card-body">
      
        <h5 class="card-title">{title}<span> <i style={{float : 'right'}} class="fa fa-heart-o" aria-hidden="true"> {likes}</i></span></h5>
        <h6 class="card-subtitle mb-2 text-muted">{language}</h6>
        <br />
        <p class="card-text">{description}</p>

        <img
          src={process.env.PUBLIC_URL + `./images/${pictureString}`}
          width="75"
          height="65"
          alt="Image1"
          style={{marginLeft: 55}}
        ></img>
        <br />
        <br />
       
        <img
        style={{marginLeft: 20}}
          src={process.env.PUBLIC_URL + `./images/0star.png`}
          width="150"
          height="40"
          alt="Image1"
        ></img>
        <br />
        <br />
        <p>Author: {author}</p>
        <Link to={`/posts/${id}`}>View post</Link>
      <br />
      <br />
        <p>date: {moment(createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default Post;
