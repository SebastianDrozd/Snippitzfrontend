import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { setUserStatus } from '../redux/slices/userSlice';
import snippit from '../assets/snippit.svg'
const NavigationBar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn)
  const username = useSelector(state => state.user.username)
  const [toggle,setToggle] = useState(false)
  const handleLogout = () => {
    dispatch(setUserStatus({loggedIn : false, username: ''}))
    localStorage.removeItem("token")
  };

  const handleToggle = () => {
      setToggle(!toggle)
  }
    return (
        <>
        <nav class="navbar " >
            <div class="container"> 
                <span class="navbar-brand"> <h2 className="brand">Snippitz</h2></span>
                <div className="links">
                    <ul className="nav-links">
                        <li className="link-item"> <Link className="links" to="/home"> Home</Link></li>
                        <li className="link-item"> <a style={{color: 'black'}} href="#about2">About</a></li>
                       {loggedIn && <li className="link-item"> <Link className="links" to="/myposts">My posts</Link></li> } 
                        
                        {loggedIn === true ?  <li className="link-item" onClick={handleLogout}>Log out</li> : "" }
                    </ul>
                </div>
                <h2 onClick={handleToggle} className="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></h2>
      
     
            </div>

            { toggle &&
      <div className="hidden-links">
        <div className="actual-links">
          <p className="hidden-links-p"><a href="#home">Home</a></p>
          <p className="hidden-links-p"><a href="#wgpt3">About</a></p>
          <p className="hidden-links-p"><a href="#wgpt3">Profile</a></p>
        </div>
        <div className="gpt3__navbar-menu_container-links-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
}
    </nav>
        </>
    )
}

export default NavigationBar
