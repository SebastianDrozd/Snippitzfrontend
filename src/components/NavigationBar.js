import React,{useEffect,useState} from 'react'
import './NavigationBar.css'
const NavigationBar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log("whats inside localstorage", localStorage.getItem("loggedIn"));
    const result = localStorage.getItem("loggedIn");
    setLoggedIn(JSON.parse(result));
    console.log(loggedIn);
  }, []);
  const handleLogout = () => {
    setLoggedIn(!loggedIn);
    localStorage.setItem("loggedIn", false);
  };
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
                        {loggedIn == true ?  <li className="link-item" onClick={handleLogout}>Log out</li> : "" }
                    </ul>
                </div>
            </div>
    </nav>
        </>
    )
}

export default NavigationBar
