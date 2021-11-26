import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import "./Header.css"
const Header = () => {
    const navigate = useNavigate()
    const loggedIn = useSelector(state => state.user.loggedIn)
    const handleLogin = () => {
        if(loggedIn){

        }
        else{
            navigate('/login#formClass')
            window.location.reload();
        }
    }
    const handleSignup = () => {
        if(loggedIn){

        }
        else{
            navigate('/signup#formClass')
            window.location.reload();
        }
    }

    return (
        <div className="header-main">
        
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          
           <div className="headercontent">
               <h2 className="welcome">Welcome to Snippitz.io</h2>
            <h4 className="title10">Sign up today to start snipping!</h4>
            <br />
            <button onClick={handleLogin} className="button-header" data-id="header-login-btn">{loggedIn === true? "Start Snipping": "Login"}</button>
            <button onClick={handleSignup}  className="button-header2" data-id="header-login-btn">{loggedIn === true? "View all": "Sign up"}</button>
            </div>
        <br />
        
        </div>
    )
}

export default Header
