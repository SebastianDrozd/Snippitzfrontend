import React,{useState,useEffect} from 'react'
import { registerUser } from '../components/connections/Requests'
import { useParams, useNavigate } from "react-router-dom";
const Signup = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () => {
      registerUser({snipUsername: username,snipPassword: password}).then(response => {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username",username)
      })
      navigate("/home");
  }
    return (
        <div>
            <div className="login-wrapper" style={{padding: 50}}>
        <h1>Sign up</h1>
        <form>
          <label>
            <p>Username</p>
            <input onChange={(e) => setUsername(e.target.value)} type="text" />
            {username}
          </label>
          <label>
            <p>Password</p>
            <input onChange={(e) => setPassword(e.target.value)}  type="password" />
            {password}
          </label>
          <div>
            <button onClick={handleSubmit} type="submit">Submit</button>
          </div>
        </form>
      </div>
        </div>
    )
}

export default Signup
