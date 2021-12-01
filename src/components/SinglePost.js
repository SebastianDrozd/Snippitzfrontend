import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CommentSection from "./CommentSection";
import {
  deletePost,
  getAllComments,
  getPost,
  updatePost,
} from "./connections/Requests";
import "./SinglePost.css";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setComments } from "../redux/slices/postSlice";
import Banner from "./Banner";
import design from '../assets/design.svg'
import proto from '../assets/proto.svg'
import arrow2 from '../assets/arrow2.png'
import SideBar from "./SideBar";
const SinglePost = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const comments = useSelector((state) => state.posts.comments);
  const [post, setPost] = useState({});
  const id = useParams();
  useEffect(() => {
    const elem = document.getElementById("yoyo");
    if (elem) {
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }, []);
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const username = useSelector((state) => state.user.username);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  useEffect(() => {
    getPost(id.id).then((response) => {
      setPost(response.data);
      setCode(response.data.code);
      setDescription(response.data.description);
    });

    getAllComments(id).then((response) => {
      dispatch(setComments(response.data));
    });
  }, [dispatch, id]);

  const handleDeletePost = () => {
    Swal.fire({
      title: 'Confirm delete post',
      text: 'Are you sure you want to delete this post?',
      icon: 'error',
      confirmButtonText: 'SDelete'
    }).then(() => {
      deletePost(id).then(() => {
        navigate("/home");
      });
    })
    
  };
  const handleSaveChanges = () => {
    updatePost(id.id, { description: description, code: code }).then(response => {
      getPost(id.id).then((response) => {
        setPost(response.data);
        setCode(response.data.code);
        setDescription(response.data.description);
      });
      Swal.fire({
        title: 'Post edited',
        text: 'Your post has been successfully edited',
        icon: 'success',
        confirmButtonText: 'Sweet!'
      })
      
     
    });
  };
  const handleGoBack = () => {
    navigate('../')
  }
  return (
    
    <div>
      <div class="row" style={{ padding: "1em" }}>
        <div class="col-2">
          <SideBar />
          
        </div>
        <div class="col-9">
          
        <img
        onClick={handleGoBack}
        src={arrow2}
        height="50"
        width="50"
        alt=""
        style={{ marginLeft: "4em", cursor: "pointer" }}
      />
      <br />
      <br />
      <br />
      <br />
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered "
          style={{ width: "20em !important" }}
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {post.title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5>Description</h5>
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                cols="40"
              >
                {post.description}
              </textarea>
              <h5>Code</h5>
              <textarea
                value={code}
                rows="10"
                cols="40"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              >
                {post.code}
              </textarea>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleSaveChanges}
                type="button"
                class="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header-color"></div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h3 id ="yoyo"
              style={{
                borderBottom: "1px solid grey",
                padding: 10,
                fontWeight: "bold",
              }}
            >
              {post.title && post.title.toUpperCase()}
            </h3>
            <br />
            <br />
            <div style={{display: 'flex',justifyContent:'space-evenly'}}>
            <div className="wrap" style={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly',width: '10em'}}>
              <div style={{display: 'flex', flexDirection:'column',alignItems: 'center',justifyContent: 'space-evenly'}}>
              <h3>
                <i class="fa fa-code" aria-hidden="true"></i>
              </h3>
              <h4 style={{ opacity: "0.7"}}>
                {post.language}
              </h4>
              </div>
          
            </div>
            <div className="wrap" style={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly',width: '10em'}}>
              <div style={{display: 'flex', flexDirection:'column',alignItems: 'center'}}>
              <h3>
                <i class="fa fa-user" aria-hidden="true"></i>
              </h3>
              <h5 style={{ opacity: "0.7", display: "inline" }}>
                {post.author}{" "}
              </h5>
              </div>
            </div>
            
            
            <div className="wrap" style={{display: 'flex',alignItems: 'center',justifyContent: 'space-evenly',width: '10em'}}>
            <div style={{display: 'flex', flexDirection:'column',alignItems: 'center'}}>
              <h3>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              </h3>
              <h5
                style={{
                  opacity: "0.7",
                }}
              >
                {moment(post.createdAt).fromNow()}
              
              </h5>
              </div>
             
             
            </div>
            </div>
            <br />
            <br />

            <h5>Description</h5>
            <p style={{ opacity: "0.7" }}>{post.description}</p>
            <br />
            <h5>Dependencies: </h5>
            <p style={{ opacity: "0.7" }}>maven, react-redux</p>
            <br></br>

            <hr />
            <br></br>
            <br />
          </div>
          <div style={{ width: "45%" }}>
            <img
              src={design}
              width="350"
              height="400"
              alt="Image1"
              style={{ marginLeft: 80, paddingTop: 50 }}
            ></img>
            <img
              src={proto}
              width="225"
              height="200"
              alt="Image1"
              style={{ marginLeft: 130, marginTop: 30 }}
            ></img>
          </div>
        </div>
        <br />
        {post.language && (
          <SyntaxHighlighter
            language={post.language.toLowerCase()}
            style={docco}
          >
            {post.code}
          </SyntaxHighlighter>
        )}

        {loggedIn && username === post.author ? (
          <div>
            <button
              type="button"
              class="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ marginRight: "1em" }}
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
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="comments-section">
        <CommentSection id={id.id} comments={comments} />
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default SinglePost;
