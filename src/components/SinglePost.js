import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import CommentSection from './CommentSection'
import { getAllComments, getAllPosts, getPost, likePost, postComment } from './connections/Requests'
import './SinglePost.css'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import CommentBox from './CommentBox'
const SinglePost = () => {
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
    useEffect(() => {
        getPost(id.id).then((response) => {
            console.log(response.data);
             setPost(response.data);
             })

         getAllComments(id).then(response => {
                console.log("comments",response.data);
                 setComments(response.data);
                  console.log(comments)})

           var loggedIn2 = JSON.parse(localStorage.getItem("loggedIn"))
            setLoggedIn(loggedIn2)
            console.log("loggedIn",loggedIn)
             
       
    },[])

    const handleSumbit = () => {
        postComment({commentMessage: comment,dateCreated : Date.now(),snipUser: localStorage.getItem("username")},id.id)
    }

    const handleLikePost= () => {
        likePost(id.id).then(response => {console.log(response)})
    }
    return (
        <div>
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
               
                <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
                </div>
              
                
                <div className="comments-section">
                    
                   <CommentSection/>
                </div>
            
        </div>
    )
}

export default SinglePost
