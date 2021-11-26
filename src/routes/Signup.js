import React,{useState} from 'react'
import { registerUser } from '../components/connections/Requests'
import {  useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
const Signup = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () => {
      registerUser({snipUsername: username,snipPassword: password}).then(response => {
        console.log(response)
        //localStorage.setItem("loggedIn", true);
        //localStorage.setItem("username",username)
      }).catch((error) => {console.log(error)})
      Swal.fire({
        title: 'Sign up Success!',
        text: 'You can now post, edit and comment on snippitz',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      navigate("/login");
  }
    return (
        <div id="formClass" style={{padding: 200}}>
             <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <label for="inputEmail" class="sr-only">Username</label>
      <input onChange={(e) => setUsername(e.target.value)} type="email" id="inputEmail" class="form-control" placeholder="Username" required autofocus/>
      <br/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input onChange={(e) => setPassword(e.target.value)}  type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
       
      </div>
      <button onClick={handleSubmit} class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
    </form>
        </div>
    )
}

export default Signup
