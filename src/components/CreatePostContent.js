import React,{useState,useEffect} from 'react'
import { savePost } from './connections/Requests'
import './CreatePostContent.css'

const CreatePostContent = () => {
    const [title,SetTitle] = useState("")
    const [language,setLanguage] = useState("")
    const [description, setDescription] = useState("")
    const [code, setCode] = useState("")

    const handleSubmit = () => {
        savePost({title: title, description: description, language: language, createdAt: Date.now(),author: localStorage.getItem("username"),code : code})
    }
    return (
        <div className="content " >
          <br />
               <h1 className="title">Create Post</h1>
               <form class="row g-">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Title</label>
    <input onChange={(e) => SetTitle(e.target.value)} class="form-control" id="inputEmail4"/>
    <p>{title}</p>
  </div>
  
    <label for="inputPassword4" class="form-label">Language</label>
    <div class="col-md-4">
    <select onChange={(e) => {
        setLanguage(e.target.value)
    }} id="inputState" class="form-select">
      <option selected>Choose...</option>
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
    
    <p>{language}</p>
  
  <div class="col-12">
    <p>Description</p>
    <textarea  onChange={(e) => {setDescription(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="100" />
    <p>{description}</p>

  </div>
  <div class="col-12">
    <p>Code</p>
    <textarea  onChange={(e) => {setCode(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="100" />
    <p>{code}</p>
  </div>
 
 
  
 
  
  <div class="col-12">
    <button onClick={handleSubmit} type="submit" class="btn btn-primary">Save Post</button>
  </div>
</form>
        </div>
    )
}

export default CreatePostContent
