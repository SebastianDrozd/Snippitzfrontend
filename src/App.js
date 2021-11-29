import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { PostListView } from "./components/PostListView";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./routes/CreatePost";
import PostPage from "./routes/PostPage";
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import Signup from "./routes/Signup";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "./components/connections/Requests";
import { useSelector } from "react-redux";
import { setUserStatus } from "./redux/slices/userSlice";
import MyPosts from "./routes/MyPosts";
import Header from "./components/Header";
import arrow from './assets/arrow.png'
import {Link} from 'react-scroll'
function App() {
  
  const dispatch = useDispatch()  
  const post2 = useSelector((state) => state.posts.posts)
    useEffect(() => {
            if(localStorage.getItem("token")){
              var token = localStorage.getItem("token")
              console.log("token", token)
              verifyToken(token).then((response)=> {
                console.log("reponse",response)
                var username = response.data.userName
                dispatch(setUserStatus({loggedIn : true, username: username}))
              }).catch(error => {
                console.log(error);
                dispatch(setUserStatus({loggedIn : false, username: ""}))
              })
            }
            //console.log(posts)
      
    },[dispatch])
  return (
    <>
    <Router>
      <NavigationBar />
    
      <Header/>
   
    <br />
    <Link activeClass="active" to="create" spy={true} smooth={true}><img src={arrow} height="50" width="50" alt="" style={{marginLeft: "50%"}} /></Link>
   
    <br />
    <br />
    
   
      <div class="container-fluid yo">
        <div class="row" style={{padding: '1em'}}>
          <div class="col-2">
            <SideBar /> 
          </div>
          <div class="col-10">
          <Routes>
          <Route exact path="/" element={<PostListView posts = {post2}/>}/>
          <Route exact path="/myposts" element={ <MyPosts/>}/>
         
          <Route exact path="/home" element={<PostListView posts = {post2}/>}/>
          <Route path="/snippitz/:id" element={<PostPage/>}/>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
          </div>
        </div>
      </div>
        
      </Router>
     
      <footer class="site-footer">
  <h3 style={{textAlign:"center", paddingTop: 60}}>Snippitz.io</h3>
</footer>
    </>
  );
}

export default App;
