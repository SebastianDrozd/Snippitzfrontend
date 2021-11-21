import React from 'react'
import './NavigationBar.css'
const NavigationBar = () => {
    const loggedIn = localStorage.getItem("loggedIn")
    return (
        <>
        <nav class="navbar navbar-light bg-light" >
            <div class="container-fluid" style={{backgroundColor: '#5863F8'}}>
                
                <span class="navbar-brand mb-0 h1"> <h3 style={{color: 'white' ,paddingLeft: 100}}>Snippitz.io</h3></span>
                <div className="links">
                    <ul className="nav-links">
                        <li className="link-item"> <i class="fa fa-home" aria-hidden="true"></i><a href="/" style={{color: 'white', textDecoration: "none"}}> Home</a></li>
                       {loggedIn && <li className="link-item"><i class="fa fa-file-code-o" aria-hidden="true"></i> Projects</li> } 
                        <li className="link-item"><i class="fa fa-files-o" aria-hidden="true"></i> My collections</li>
                        <li className="link-item"><i class="fa fa-user" aria-hidden="true"></i>Settings</li>
                    </ul>
                </div>
            </div>
    </nav>
        </>
    )
}

export default NavigationBar
