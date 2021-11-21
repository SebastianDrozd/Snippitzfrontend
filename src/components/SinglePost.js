import React,{useEffect,useState} from 'react'
import { Navigate, useParams } from 'react-router'
import CommentSection from './CommentSection'
import { deletePost, getAllComments, getAllPosts, getPost, likePost, postComment, updatePost } from './connections/Requests'
import './SinglePost.css'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CommentBox from './CommentBox'
import {  useNavigate } from "react-router-dom";
const SinglePost = () => {
  let navigate = useNavigate();
   const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
   import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
   const Component = () => {
     const codeString = '(num) => num + 1';
     return (
       <SyntaxHighlighter language="javascript" style={docco}>
         {codeString}
       </SyntaxHighlighter>
     );
   };`
   //{loggedIn == true ? <button onClick={handleLikePost}>like post</button> : ""}
    const [comments,setComments] = useState([])
    const [post,setPost] = useState({})
    const id = useParams()
    const [comment , setComment] = useState("");
    const [loggedIn,setLoggedIn] =useState(false)
    const [username, setUserName] = useState("")
    const [description, setDescription] =useState("")
    const [code, setCode] = useState("")
    useEffect(() => {
        getPost(id.id).then((response) => {
            console.log(response.data);
             setPost(response.data);
             setCode(response.data.code)
             setDescription(response.data.description)
             })

         getAllComments(id).then(response => {
                console.log("comments",response.data);
                 setComments(response.data);
                  console.log(comments)})

           var loggedIn2 = JSON.parse(localStorage.getItem("loggedIn"))
           setUserName(localStorage.getItem("username"))
           console.log("usernaem",username)
            setLoggedIn(loggedIn2)
            console.log("loggedIn",loggedIn)
             
       
    },[])

    const handleSumbit = () => {
        postComment({commentMessage: comment,dateCreated : Date.now(),snipUser: localStorage.getItem("username")},id.id)
    }

    const handleLikePost= () => {
        likePost(id.id).then(response => {console.log(response)})
    }

    const handleDeletePost = () => {
      deletePost(id).then(() => {
        navigate("/home");
      })
    }
    const handleSaveChanges = () => {
      updatePost(id.id, {description: description, code: code})
    }
    return (
        <div>
          


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered " style={{width: '20em !important'}}>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{post.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Description</h5>
        <textarea value={description} onChange={(e) => {
          setDescription(e.target.value)
        }} cols="40">{post.description}</textarea>
        <h5>Code</h5>
        <textarea value={code} rows='10' cols="40" onChange={(e) => {
          setCode(e.target.value)
        }}>{post.code}</textarea>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleSaveChanges} type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            <br />
           
            <br />
          
           <div class="input-group mb-2" style={{ marginLeft: 60 }}>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color: '#bbbfff'}}
          >
            Dropdown
          </button>
          
        </div>
          <br />
          <br />
            <div className="content">
            
        <div style={{display: 'flex'}}>
            <div style={{width: '50%'}}> 
                <h3 style={{borderBottom: '1px solid grey',padding: 10}}>{post.title}</h3>
                <br />
                <br />
                <h3><i class="fa fa-code" aria-hidden="true"></i></h3>
                <h4 style={{opacity : '0.7', display : 'inline'}}>{post.language}</h4><h4 style={{display: 'inline', marginLeft: '8em', opacity: '0.7'}}>7 <i style={{color: 'slateblue'}} className="fa fa-heart"></i></h4>
                <br />
                <br />
                <br />
                <h3><i class="fa fa-user" aria-hidden="true"></i></h3>
                <h4 style={{opacity : '0.7'}}>{post.author}</h4>
                <br />
                <br />
                <br />
                <h5>Description</h5>
                <p style={{opacity : '0.7'}}>{post.description}</p>
                <br />
                <h5>Dependencies: </h5>
                <p style={{opacity : '0.7'}}>maven, react-redux</p>
                <br></br>
                
                
                <br></br>
                <br/>
                </div>
            <div style={{width: '50%'}}><img
          src={process.env.PUBLIC_URL + `../images/22.png`}
          width="350"
          height="400"
          alt="Image1"
          style={{marginLeft: 0,paddingTop: 50}}
          
        ></img>
        <img
          src={process.env.PUBLIC_URL + `../images/device2.png`}
          width="225"
          height="200"
          alt="Image1"
          style={{marginLeft: 50,paddingTop: 20}}
          
        ></img>
       </div>
        </div>
               {post.language &&  <SyntaxHighlighter language={post.language.toLowerCase()} style={docco}>
      {post.code}
    </SyntaxHighlighter>}
                
    {username == post.author ? <div ><button type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal"style={{marginRight:"1em"}}>Edit</button>
   
    <button onClick={handleDeletePost} type="button" class="btn btn-danger">Delete</button></div> : ""}
    
                </div>
              
                
                <div className="comments-section">
                    
                   <CommentSection id ={id.id} comments ={comments}/>
                </div>
            
        </div>
    )
}

export default SinglePost
