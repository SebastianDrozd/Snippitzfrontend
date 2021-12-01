import React, { useEffect, useState } from "react";
import { registerUser } from "../components/connections/Requests";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import social from "../assets/social.svg";
const Signup = (props) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState(false);
  const [missing, setMissing] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameEmpty, setUserNameEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [rePasswordEmpty, setRePasswordEmpty] = useState(false);
  const [passwordLengthError,setPasswordLengthError] = useState(false)
  useEffect(() => {
    const elem = document.getElementById("yoyo");
    if (elem) {
      elem.scrollIntoView();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length == 0 || password.length == 0) {
      setMissing(true);
      return;
    }
    if (rePassword != password) {
      setPasswordError(true);
      return;
    }
    if(password.length <6){
        setPasswordLengthError(true)
        return;
    }
    registerUser({ snipUsername: username, snipPassword: password,createdAt: Date.now() })
      .then((response) => {
        console.log(response);
        //localStorage.setItem("loggedIn", true);
        //localStorage.setItem("username",username)
        Swal.fire({
          title: "Sign up Success!",
          text: "You can now post, edit and comment on snippitz. You will now be redirected so you can log in.",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/login");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div
      id="formClass"
      className="login-wrapper"
      
    >
      <form
        class="form-signin"
        style={{
          boxShadow: "0 3px 10px 6px rgba(0, 0, 0, 0.1)",
          padding: "3em",
          borderRadius: "20px",
        }}
      >
        <img
          id="yoyo"
          style={{ marginLeft: "7em" }}
          class="mb-4"
          src={social}
          alt=""
          width="300"
          height="300"
        />
        <h1
          style={{ textAlign: "center", fontWeight: "bold", opacity: "0.8" }}
          class="h3 mb-3 font-weight-normal"
        >
          Sign up for an account
        </h1>
          <br/>
        <br />
        <label for="inputEmail" class="sr-only">
          Username
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
         
          id="inputEmail"
          class="form-control"
          placeholder="Username"
          required
          autofocus
        />

        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />

        <label for="inputPassword" class="sr-only">
          Re-Type Password
        </label>
        <input
          onChange={(e) => setRePassword(e.target.value)}
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Re-Type Password"
          required
        />
        <br />
        {passwordLengthError && (
          <div class="alert alert-danger" role="alert">
            Please Choose a longer password with a minimum of 6 characters
          </div>
        )}
        {passwordError && (
          <div class="alert alert-danger" role="alert">
            Your passwords do not match
          </div>
        )}
        {missing && (
          <div class="alert alert-danger" role="alert">
            Please fill out all fields
          </div>
        )}
        {error && (
          <div class="alert alert-danger" role="alert">
            The username you chose already exists, please choose a different
            username
          </div>
        )}

        <br />

        <button
          style={{
            float: "right",
            backgroundColor: "rgb(102, 133, 255)",
            borderRadius: "20px",
          }}
          onClick={handleSubmit}
          class="btn btn-lg btn-primary btn-block"
         
        >
          Sign up
        </button>
        <br />
        <br />
        <br />
      </form>
    
     
    </div>
  );
};

export default Signup;
