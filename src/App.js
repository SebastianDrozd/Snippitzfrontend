import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { PostListView } from "./components/PostListView";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostView from "./routes/PostView";
import CreatePost from "./routes/CreatePost";
import PostPage from "./routes/PostPage";
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage";
import Signup from "./routes/Signup";
function App() {
  const loggedIn = localStorage.getItem("loggedIn")
  console.log("logged in status",loggedIn)
  console.log("username", localStorage.getItem("username"))
  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/projects" element={<PostView/>}/>
          <Route path="/projects/:id" element={<PostPage/>}/>
          <Route path="/create" element={<CreatePost/>}/>
         
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
      <br />
      <br />
      <footer class="site-footer">
  <h3 style={{textAlign:"center", color: 'white', paddingTop: 60}}>Snippitz.io</h3>
</footer>
    </>
  );
}

export default App;
