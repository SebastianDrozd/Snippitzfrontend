import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { savePost } from './connections/Requests'
import './CreatePostContent.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import panel from '../assets/panel.svg'
import man from '../assets/man.svg'
import arrow2 from '../assets/arrow2.png'
import firm from '../assets/firm.svg'
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
      <>   <img src={arrow2} height="50" width="50" alt="" style={{marginLeft: '4em', cursor: 'pointer'}} />
        <div className="content2 " style={{width: '60% !important'}} >
        
          <br /><div style={{display:'flex'}}>
               <h1 className="title">Create Snippit</h1>
               <img src={panel} height="150" width='150' alt="" />
               </div>
              
               <form class="row g-"> 
    <div  style={{display: 'flex', justifyContent: 'space-between'}}>
  <div className="elevation-cover" class="col-md-6">
    <br />
    <p>Title</p>
    <input onChange={(e) => SetTitle(e.target.value)} class="form-control" id="inputEmail4"/>
  </div>
   
    </div>
  <br />
  <br />
  <br />
  <div style={{display: 'flex', justifyContent: 'space-between'}}>

    <div class="col-md-4">
    <select onChange={(e) => {
        setLanguage(e.target.value)
    }} id="inputState" class="form-select">
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
  
  <div class="col-12" style={{marginTop: '1em'}}>
    <p>Description</p>
    <textarea  onChange={(e) => {setDescription(e.target.value)}} id="inputAddress" name="inputAddress" rows="4" cols="65" />


  </div>
  <br />
  <br />
  <div style={{display: 'flex',justifyContent: 'space-evenly',margin: '2em 0em'}}>
  <img src={man} height="150" width="150" alt="" />
  <img src={firm} height="150" width="150" alt="" />
  </div>
  <div class="col-12">
    <p>Code <i class="fa fa-code" aria-hidden="true"></i></p>
    <textarea  onChange={(e) => {setCode(e.target.value)}} id="inputAddress" name="inputAddress" rows="9" cols="65" />

  </div>
 
 
  
 
  <br />
  <br />
  <div class="col-12">
    <br />
    <br />
    <button onClick={handleSubmit} style={{float: 'right'}} type="submit" class="btn btn-primary">Save Post</button>
  </div>
</form>

        </div>
        <br />
         <br />
         <br />
         <br />
        </>
    )
}

export default CreatePostContent
