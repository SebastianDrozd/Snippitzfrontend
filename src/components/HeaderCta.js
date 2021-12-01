import React from 'react'
import office from '../assets/office.svg'
import share from '../assets/share.svg'
import design from '../assets/design.svg'
import discuss from '../assets/discuss.svg'
import tech from '../assets/tech.jpg'
import robot from'../assets/robot.png'
import './HeaderCta.css'
const HeaderCta = () => {
    return (
        <div>
          <div>
        <img className="robot-image" src={robot} alt="" />
      </div>
              <div className="cta-outer-container" style={{display: 'flex', alignItems: 'center',justifyContent: 'space-evenly'}}>
        <div className="cta-inner-container" style={{display: 'flex', flexDirection: 'column',padding: '5em'}}>
      <p className="home-message">Check out the newest coolest posts by users just like you!</p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Bibendum enim facilisis gravida neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis vel eros donec ac.</p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Create, post, save ,edit all your favorite code snippitz. At Snippitz.IO, keep all your favorite functions together in one place for world to see! </p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Bibendum enim facilisis gravida neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis vel eros donec ac.</p>
      
      </div>
      <img className="cta-img" src={office} height="400" width="350" alt="" />
      </div>
     
      <div className="cta-second-inner-container" style={{display: 'flex', justifyContent: 'space-evenly',paddingLeft: '2em',paddingRight: '2em'}}>
        <div className="cta-category-item" style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
          <h4 className="cta-header">Create</h4>
          <p className="cta-p">Create a one of a kind function for all the people to see. What you put in is what you get out. </p>
        <img src={share} height="150" width="150" alt="" />
        </div>
        <div className="cta-category-item"  style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
          <h4 className="cta-header">Share</h4>
          <p className="cta-p">Create a one of a kind function for all the people to see. What you put in is what you get out. </p>
        <img src={design} height="150" width="150" alt="" />
        </div>
        <div className="cta-category-item" style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
          <h4 className="cta-header">Discuss</h4>
          <p className="cta-p">Create a one of a kind function for all the people to see. What you put in is what you get out. </p>
        <img src={discuss} height="150" width="150" alt="" />
        </div>
      </div>
    
      <br />
      <br />
      <br />
      <hr style={{ marginLeft: "3em" ,width: '75%', marginLeft: 'auto',marginRight: 'auto', color: 'rgb(170, 170, 170)'}} />
     
    <br />
     
        </div>
    )
}

export default HeaderCta
