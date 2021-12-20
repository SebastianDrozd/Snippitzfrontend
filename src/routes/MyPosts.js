import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'
import Post from '../components/Post'
import './MyPosts.css'
import post from  '../assets/post.png'
import like from '../assets/like.png'
import { Link,useNavigate } from 'react-router-dom'
import moment from "moment";
import { getPostsByAuthor, getUser } from '../components/connections/Requests'
const MyPosts = () => {
  const navigate = useNavigate()
    const username = useSelector(state=> state.user.username)
    const [posts,setPosts] = useState([])
    const userPosts = posts.filter(post => post.author === username)
    const [user, setUser] = useState({})
    useEffect(() => {
      getPostsByAuthor(username).then(response => {
        setPosts(response.data)
      } )
      console.log("username", username)
      console.log("posts",posts)
      const elem = document.getElementById("yoyo");
      if (elem) {
        elem.scrollIntoView({behavior: 'smooth'});
      }
      getUser(username).then(reponse => {
            setUser(reponse.data)
            
      })
    },[])
    const handleGoHome = () => {
      navigate('/home')
    }
    return (
        <div class="container">
          <br />
          
          
          <br />
          <br />
          <div className="main-outer-container-my-posts" style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div id='yoyo' style={{display: 'flex', flexDirection: 'column',justifyContent:'space-evenly',justifyContent: 'flex-start'}}>
              <div className="profile-card">
                <div className="profile-image" style={{display: 'flex', flexDirection: "column", justifyContent: 'space-evenly',alignItems:'center'}}>
                <img height="125" width="125" src="https://av-www.smartrecruiters.com/candidate-portal-ui/static/assets/images/generic/avatar-placeholder-v2.png" alt="Sebastian Drozd" />
               <br />
               <br />
                <h4 className="profile-username">{username}</h4>
                <br />
                <p style={{opacity: '0.7'}}>Member since {moment(user.createdAt).format('MM-DD-YYYY')}</p>
                <br />
                <button onClick={handleGoHome}  className="button-header" data-id="header-login-btn">home</button>
                </div>

              </div>
              <div className="profile-additonal-info">
                <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-evenly'}}>
          <img src={post} height="50" width="50" alt="" />
          <p style={{opacity: '0.7'}}> {userPosts.length} total posts</p>
          </div>
          <br />
          <div style={{display: 'flex',alignItems: 'center', justifyContent: 'space-evenly'}}>
          <img src={like} height="50" width="50" alt="" style={{marginRight: '0em'}} />
          <p  style={{opacity: '0.7',marginRight: '2em'}}> 0 post likes </p>
          </div>
              </div>
            </div>
            <div className="post-list">
              <h2 className="myposts-welcome">Welcome back, {username}!</h2>
            
              <div className="post-container" style={{display: 'flex',flexDirection: 'column'}}>
      
            <br />
      
                {userPosts.length == 0 && <div>
                
                    <h3 style={{textAlign: 'center', opacity: '0.9'}}>You have no posts</h3>
                    <br />
                    <p style={{textAlign: 'center', opacity: '0.7'}}>Create your first post by clicking the button below </p>
                    <br />
                    <br /></div>}
                <div className="actual-post-list">
                
                {userPosts &&
            userPosts.map((post) => (
              <div>
                  <div className="my-post">
                  <Link className="link-to-post" style={{display: 'block'}} to={`/snippitz/${post.id}`}>{post.title}</Link>
                  <p style={{display: 'inline'}}>{post.language}</p>
                  <p  style={{float: 'right', display: 'inline', opacity: '0.7'}}>{moment(post.createdAt).fromNow()}</p>
                </div>
                
              </div>
              
            ))}
            
              </div>
              <Link id="create"
            style={{
              outline: 'none',
             
              padding: '8em',
              textAlign: "center",
              color: "white",
             
            
              padding: 10,
              borderRadius: 20,
              height: '40px',
              fontWeight: "bold",
              backgroundColor: "rgb(102, 133, 255)",
            }}
            to="/create"
          >
            Create Post
            
          </Link>
                
               
              </div>
              <hr />
            </div>
            
          </div>



        <div className="posts_container container">
        <div class="row " style={{ justifyContent: "space-evenly" }}>
           
        
        </div>
        </div>
        <br />
        <br />
        <br />
            
        </div>
    )
}

export default MyPosts
