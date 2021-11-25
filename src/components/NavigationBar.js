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
        <nav class="navbar navbar-light bg-light" >
            <div class="container-fluid" style={{}}>
                
                <span class="navbar-brand mb-0 h1"> <h2 style={{color: '#5863F8' ,paddingLeft: 60,fontWeight: 'bold'}}>Snippitz.io</h2></span>
                <div className="links">
                    <ul className="nav-links">
                        <li className="link-item"> <i class="fa fa-home" aria-hidden="true"></i><Link style={{color: 'black'}} to="/home"> Home</Link></li>
                       {loggedIn && <li className="link-item"><i class="fa fa-file-code-o" aria-hidden="true"></i> <Link style={{color: 'black'}}to="/myposts">My posts</Link></li> } 
                        <li className="link-item"><i class="fa fa-user" aria-hidden="true">{username}</i></li>
                        {loggedIn === true ?  <li className="link-item" onClick={handleLogout}>Log out</li> : "" }
                    </ul>
                </div>
            </div>
    </nav>
        </>
    )
}

export default NavigationBar
