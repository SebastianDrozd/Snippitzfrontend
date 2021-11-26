import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { savePost } from './connections/Requests'
import './CreatePostContent.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
const CreatePostContent = () => {
  let navigate = useNavigate();
   const user = useSelector(state => state.user.username)
    const [title,SetTitle] = useState("")
    const [language,setLanguage] = useState("")
    const [description, setDescription] = useState("")
    const [code, setCode] = useState("")

    const handleSubmit = () => {
        savePost({title: title, description: description, language: language, createdAt: Date.now(),author: user,code : code})
        Swal.fire({
          title: 'Post created!',
          text: 'Your post is now public!',
          icon: 'success',
          confirmButtonText: 'Sweet!'
        })
        navigate('/home')
    }
    return (
        <div className="content " >
          <br />
               <h1 className="title">Create Snippit</h1>
               <form class="row g-">
  <div class="col-md-4">
    <br />
    <p>Title</p>
    <input onChange={(e) => SetTitle(e.target.value)} class="form-control" id="inputEmail4"/>
  </div>
  <br />
  <br />
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
    
  
  <div class="col-12">
    <p>Description</p>
    <textarea  onChange={(e) => {setDescription(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="70" />


  </div>
  <div class="col-12">
    <p>Code <i class="fa fa-code" aria-hidden="true"></i></p>
    <textarea  onChange={(e) => {setCode(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="70" />

  </div>
 
 
  
 
  <br />
  <br />
  <div class="col-12">
    <button onClick={handleSubmit} type="submit" class="btn btn-primary">Save Post</button>
  </div>
</form>
        </div>
    )
}

export default CreatePostContent
