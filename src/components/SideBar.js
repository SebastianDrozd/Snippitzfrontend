import React from "react";
import { getPostsByType } from "./connections/Requests";
import "./SideBar.css";
import { useDispatch } from "react-redux";
import { setPosts, setSortChoice } from "../redux/slices/postSlice";
import java from '../assets/java.jpg'
import programming from '../assets/programming.svg'
const SideBar = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log(e.target.outerText);

    dispatch(setSortChoice(e.target.outerText));
    getPostsByType(e.target.outerText).then((response) => {
      console.log("Sidebar resposne", response.data);
      dispatch(setPosts(response.data));
    });
  };
  return (
    <div className="category-container" style={{ padding: "1em" }}>
      <img
        src={programming}
        width="150"
        height="100"
        alt="Image1"
        style={{ marginBottom:'0em',  display: "inline",marginTop: '3em',marginLeft: '1em' }}
      ></img>

      <br />
    <br />
      <p className="langtitle">Languages  <i style={{marginLeft: '1em'}} class="fa fa-code" aria-hidden="true"> </i> </p>
      <ul className="category-list">
        <li onClick={handleClick} value="Java" className="category-item">
          Java
        </li>
        <li onClick={handleClick} className="category-item">
          C++
        </li>
        <li onClick={handleClick} className="category-item">
          C
        </li>
        <li onClick={handleClick} className="category-item">
          Python
        </li>
        <li onClick={handleClick} value="JavaScript" className="category-item">
          JavaScript
        </li>
        <li onClick={handleClick} className="category-item">
          C#
        </li>
        <li onClick={handleClick} className="category-item">
          Assembly
        </li>
        <li onClick={handleClick} className="category-item">
          Html
        </li>
        <li onClick={handleClick} className="category-item">
          CSS
        </li>
        <li onClick={handleClick} className="category-item">
          Raspberry Pi
        </li>
        <li onClick={handleClick} className="category-item">
          Rust
        </li>
        <li onClick={handleClick} className="category-item">
          Perl
        </li>
        <li onClick={handleClick} className="category-item">
          PHP
        </li>
        <li onClick={handleClick} className="category-item">
          Visual Basic
        </li>
        <li onClick={handleClick} className="category-item">
          Ruby
        </li>
        <li onClick={handleClick} className="category-item">
          Go
        </li>
        <li onClick={handleClick} className="category-item">
          SQL
        </li>
        <li onClick={handleClick} className="category-item">
          TypeScript
        </li>
      </ul>
    <br />
      <p className="langtitle">Type </p>
      <ul className="category-list">
        <li onClick={handleClick} value="Java" className="category-item">
          {" "}
          <i
            style={{ display: "inline" }}
            class="fa fa-database"
            aria-hidden="true"
          ></i>
          Database
        </li>
        <li onClick={handleClick} className="category-item">
          Api
        </li>
        <li onClick={handleClick} className="category-item">
          Networking
        </li>
        <li onClick={handleClick} className="category-item">
          Scripting
        </li>
        <li onClick={handleClick} value="JavaScript" className="category-item">
          Emmbedded
        </li>
        <li onClick={handleClick} className="category-item">
          C#
        </li>
        <li onClick={handleClick} className="category-item">
          Assembly
        </li>
        <li onClick={handleClick} className="category-item">
          Html
        </li>
        <li onClick={handleClick} className="category-item">
          CSS
        </li>
        <li onClick={handleClick} className="category-item">
          Raspberry Pi
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
