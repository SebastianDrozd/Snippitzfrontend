import React from 'react'
import { getPostsByType } from './connections/Requests'
import './SideBar.css'
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../redux/slices/postSlice'
const SideBar = () => {
    const dispatch = useDispatch()  
    const handleClick = (e) => {
            console.log(e.target.outerText)
            getPostsByType(e.target.outerText).then((response) => {
              console.log("Sidebar resposne",response.data)
                dispatch(setPosts(response.data))
              
                
            })
      
    }
    return (
        <div className="category-container">
             <img
          src={process.env.PUBLIC_URL + `../images/pair.png`}
          width="150"
          height="100"
          alt="Image1"
          style={{marginLeft: 20,paddingTop: 0,display: 'inline'}}
          
        ></img>
        <br />
        <br />
            <h3  >Categories</h3>

            
            
            <br />
            <h5>Languages: </h5>
            <ul className="category-list">
                <li onClick={handleClick} value="Java" className="category-item">Java</li>
                <li onClick={handleClick} className="category-item">C++</li>
                <li onClick={handleClick} className="category-item">C</li>
                <li onClick={handleClick} className="category-item">Python</li>
                <li onClick={handleClick} value="JavaScript" className="category-item">JavaScript</li>
                <li onClick={handleClick} className="category-item">C#</li>
                <li onClick={handleClick} className="category-item">Assembly</li>
                <li onClick={handleClick} className="category-item">Html</li>
                <li onClick={handleClick} className="category-item">CSS</li>
                <li onClick={handleClick} className="category-item">Raspberry Pi</li>
            </ul>

            <h5>Type: </h5>
            <ul className="category-list">
                <li onClick={handleClick} value="Java" className="category-item"> <i style={{display:'inline'}}class="fa fa-database" aria-hidden="true"></i>Database</li>
                <li onClick={handleClick} className="category-item">Api</li>
                <li onClick={handleClick} className="category-item">Networking</li>
                <li onClick={handleClick} className="category-item">Scripting</li>
                <li onClick={handleClick} value="JavaScript" className="category-item">Emmbedded</li>
                <li onClick={handleClick} className="category-item">C#</li>
                <li onClick={handleClick} className="category-item">Assembly</li>
                <li onClick={handleClick} className="category-item">Html</li>
                <li onClick={handleClick} className="category-item">CSS</li>
                <li onClick={handleClick} className="category-item">Raspberry Pi</li>
            </ul>
        </div>
    )
}

export default SideBar