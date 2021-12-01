import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { savePost } from "./connections/Requests";
import "./CreatePostContent.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import panel from "../assets/panel.svg";
import man from "../assets/man.svg";
import arrow2 from "../assets/arrow2.png";
import firm from "../assets/firm.svg";
const CreatePostContent = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.username);
  const [title, SetTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [titleBlank,setTitleBlank] = useState(false)
  const [languageBlank, setLanguageBlank] = useState(false)

  useEffect(() => {
    const elem = document.getElementById("yoyo");
    if (elem) {
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    if(title.length == 0 || language.length == 0 || description == 0 || code == 0){
      console.log("language",language)
      setTitleBlank(true)
      return;
    }
   
    savePost({
      title: title,
      description: description,
      language: language,
      createdAt: Date.now(),
      author: user,
      code: code,
    }, localStorage.getItem("token"));
    Swal.fire({
      title: "Post created!",
      text: "Your post is now public!",
      icon: "success",
      confirmButtonText: "Sweet!",
    });
    navigate("/home");
  };
  const handleGoBack = () => {
    navigate('../')
  }
  return (
    <>
      {" "}
      <img
      onClick={handleGoBack}
        src={arrow2}
        height="50"
        width="50"
        alt=""
        style={{ marginLeft: "4em", cursor: "pointer" }}
      />
     
      <div className="content2 " style={{ }}>
        <br />
        <div style={{ display: "flex", justifyContent:'space-evenly' }}>
          <h1 id="yoyo" className="title">Create A Snippit</h1>
          <img src={panel} height="200" width="250" alt="" />
        </div>
        
       <div style={{display: 'flex',flexDirection: 'column',alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
       <div style={{ display: "flex", justifyContent: "space-between" ,flexDirection: 'row',alignItems: 'center'}}>
            <div style={{marginRight:'2em'}} >
              <p>Title</p>
              <input
                onChange={(e) => SetTitle(e.target.value)}
                class="form-control"
                id="inputEmail4"
              />
            </div>
            
         
            <div class="">
              <select
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
                id="inputState"
                class="form-select"
              >
                <option selected>Language</option>
                <option>Java</option>
                <option>C++</option>
                <option>C</option>
                <option>Objective C</option>
                <option>JavaScript</option>
                <option>Python</option>
                <option>Swift</option>
                <option>Rust</option>
                <option>C#</option>
                <option>R</option>
                <option>GoLang</option>
                <option>HTML/CSS</option>
                <option>Raspberry Pi</option>
                <option>Arduino</option>
              </select>
            </div>       
          </div>       
          <div class="" >
            <p>Description</p>
            <p style={{opacity: '0.7'}}>Add an informative description that accurately explains all the steps neccessary to make your program work.</p>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              id="inputAddress"
              name="inputAddress"
              rows="4"
              cols="65"
            />
          </div>
       </div>  
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "2em 0em",
            }}
          >
            <img src={man} height="150" width="150" alt="" />
            <img src={firm} height="150" width="150" alt="" />
          </div>
          <div class="col-12">
            <p>
              Dependencies <i class="fa fa-code" aria-hidden="true"></i>
            </p>
            <p style={{opacity: '0.7'}}>List any important dependencies required for your code to run correctly</p>
            <textarea
              onChange={(e) => {
                setCode(e.target.value);
              }}
              id="inputAddress"
              name="inputAddress"
              rows="3"
              cols="65"
            />
          </div>
          <br />
          <div class="col-12">
            <br />
            <p>
              Code <i class="fa fa-code" aria-hidden="true"></i>
            </p>
            <p style={{opacity: '0.7'}}>Copy and paste or directly write your code here.Dont worry about formatting. We will take care of that for you!</p>
            <textarea
              onChange={(e) => {
                setCode(e.target.value);
              }}
              id="inputAddress"
              name="inputAddress"
              rows="9"
              cols="65"
            />
          </div>

          <br />
          <br />
          {titleBlank && <div class="alert alert-danger" style={{width: '30em'}} role="alert">
 Please fill out all the required fields
</div>}
          <div class="col-12">
            <br />
            <br />
            <button
              onClick={handleSubmit}
              style={{ float: "right" }}
              type="submit"
              class="btn btn-primary"
            >
              Save Post
            </button>
          </div>
       
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default CreatePostContent;
