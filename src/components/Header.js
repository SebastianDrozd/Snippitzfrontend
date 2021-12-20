import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import logo from "../assets/program.svg";
import logo2 from "../assets/web2.svg";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const handleLogin = () => {
    if (loggedIn) {
      navigate("/create")
    } else {
      navigate("/login");
      window.location.reload();
    }
  };
  const handleSignup = () => {
    if (loggedIn) {
      const elem = document.getElementById("yoyo2");
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    } else {
      navigate("/signup");
      window.location.reload();
    }
  };

  return (
    <div className="header-flex-container">
      <div className="header-greetings-flex-item">
        <h2 className="welcome">Welcome to Snippitz.io</h2>
        <h4 className="title-secondary">Sign up today to start snipping!</h4>
        <br />
        <button
          onClick={handleLogin}
          className="button-header"
          data-id="header-login-btn"
        >
          {loggedIn === true ? "Start Snipping" : "Login"}
        </button>
        <button
          onClick={handleSignup}
          className="button-header2"
          data-id="header-login-btn"
        >
          {loggedIn === true ? "View all" : "Sign up"}
        </button>
      </div>
      <div className="header-image-flex-item">
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Header;
