import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../components/connections/Requests'
import { setUserStatus } from '../redux/slices/userSlice';
import {  useNavigate } from "react-router-dom";
import op from '../assets/op.svg'

import './LoginPage.css'
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [hasError, setError] = useState(false)
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const elem = document.getElementById("yoyo");
    if (elem) {
      elem.scrollIntoView({behavior: 'smooth'});
    }
  }, []);

 const handleLogin = (e) => {
  if (username.length == 0 || password.length == 0) {
    setMissing(true);
    return;
  }
   e.preventDefault()
    loginUser({snipUsername: username,snipPassword: password})
    .then(response => {
    
      var token = response.headers.authorization.substring(7);
      var username = response.data.snipUsername
      localStorage.setItem("token",token)
    
      dispatch(setUserStatus({loggedIn: true, username: username }))
      navigate('/myposts')
    }).catch((response) => {setError(true)})
  }
    return (
      <div className="login-wrapper" id="formClass" style={{padding: '1em'}}>
             <form class="form-signin"style={{
          boxShadow: "0 3px 10px 6px rgba(0, 0, 0, 0.1)",
          padding: "3em",
          borderRadius: "20px",
        }}>
      <img
          id="yoyo"
          style={{ marginLeft: "7em" }}
          class="mb-4"
          src={op}
          alt=""
          width="200"
          height="200"
        />
        <br/>
        <br/>
     <h1
          style={{ textAlign: "center", fontWeight: "bold", opacity: "0.8" }}
          class="h3 mb-3 font-weight-normal"
        >
         Log In
        </h1>
        <br/>
        <br/>
      <label for="inputEmail" class="sr-only">Username</label>
      <input onChange={(e) => setUsername(e.target.value)}  id="inputEmail" class="form-control" placeholder="Username" autofocus required/>
      <br/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input onChange={(e) => setPassword(e.target.value)}  type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
       
      </div>
      {missing && (
          <div class="alert alert-danger" role="alert">
            Please fill out all fields
          </div>
        )}
      {hasError && <div class="alert alert-danger" role="alert">
  You have entered a wrong username/password combination!
</div>}
      <button style={{float: 'right'}} onClick={handleLogin} className="button-header3" >Sign in</button>
      <br />
      
      <br/>
      <br/>
    </form>
        </div>
    )
}

export default LoginPage
