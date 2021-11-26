import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { setUserStatus } from '../redux/slices/userSlice';
const NavigationBar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn)
  const username = useSelector(state => state.user.username)
  const handleLogout = () => {
    dispatch(setUserStatus({loggedIn : false, username: ''}))
    localStorage.removeItem("token")
  };
    return (
        <>
        <nav class="navbar " >
            <div class="container"> 
                <span class="navbar-brand"> <h2 className="brand">Snippitz</h2></span>
                <div className="links">
                    <ul className="nav-links">
                        <li className="link-item"> <Link className="links" to="/home"> Home</Link></li>
                       {loggedIn && <li className="link-item"> <Link className="links" to="/myposts">My posts</Link></li> } 
                        <li className="link-item"><Link className="links" to="/myposts">{username}</Link></li>
                        {loggedIn === true ?  <li className="link-item" onClick={handleLogout}>Log out</li> : "" }
                    </ul>
                </div>
            </div>
    </nav>
        </>
    )
}

export default NavigationBar
