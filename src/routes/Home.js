import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="container-fluid" style={{height: "100vh"}}>
          <br />
        <div class="row"   >
          <div class="col-5" style={{textAlign: 'right',paddingTop: 275}}>
              <div>
              <h1 style={{}}>All your best code</h1>
              <br />
              <h3 style={{color : "#5863F8", fontWeight: 50}}>In one place!</h3>
              <br />
              <br />
              <button type="button" class="btn btn-outline-info"><Link to="/signup">Sign up</Link></button> <button style={{backgroundColor: ' #5863F8 ', color: 'white !important'}} type="button" class="btn btn-outline-info"><Link style={{color: 'white', fontStyle: 'bold'}} to="/home">View Snippitz</Link></button>
              </div>
          </div>
          <div class="col-6" style={{paddingTop: 60}}> <img
       
          src={process.env.PUBLIC_URL + `./images/landing2.png`}
          width="80%"
          height="500"
          alt="Image1"
          style={{float: "left"}}
        ></img></div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
