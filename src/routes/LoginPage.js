import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../components/connections/Requests'
import { setUserStatus } from '../redux/slices/userSlice';
import {  useNavigate } from "react-router-dom";
import './LoginPage.css'
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [hasError, setError] = useState(false)

 const handleLogin = () => {
    loginUser({snipUsername: username,snipPassword: password})
    .then(response => {
    
      var token = response.headers.authorization.substring(7);
      var username = response.data.snipUsername
      localStorage.setItem("token",token)
    
      dispatch(setUserStatus({loggedIn: true, username: username }))
      navigate('/home')
    }).catch((response) => {setError(true)})
  }
    return (
      <div id="formClass" style={{padding: 200}}>
             <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 class="h3 mb-3 font-weight-normal">Log in</h1>
      <label for="inputEmail" class="sr-only">Username</label>
      <input onChange={(e) => setUsername(e.target.value)}  id="inputEmail" class="form-control" placeholder="Username" autofocus required/>
      <br/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input onChange={(e) => setPassword(e.target.value)}  type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
       
      </div>
      
      <button onClick={handleLogin} className="button-header3" >Sign in</button>
      <br />
      {hasError && <div class="alert alert-danger" role="alert">
  You have entered a wrong username/password combination!
</div>}
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </form>
        </div>
    )
}

export default LoginPage
