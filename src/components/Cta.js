import React from 'react'
import office from '../assets/office.svg'
import share from '../assets/share.svg'
import design from '../assets/design.svg'
import discuss from '../assets/discuss.svg'
import './PostListView.css'
const Cta = () => {
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-evenly'}}>
        <div style={{display: 'flex', flexDirection: 'column',padding: '2em'}}>
      <p className="home-message">Check out all the newest coolest posts by users just like you!</p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Bibendum enim facilisis gravida neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis vel eros donec ac.</p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Create, post, save ,edit all your favorite code snippitz. At Snippitz.IO, keep all your favorite functions together in one place for world to see! </p>
      <p className="second-home-message" style={{opacity: '0.5'}}>Lorem ipsum c incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Bibendum enim facilisis gravida neque convallis. Ac tincidunt vitae semper quis lectus nulla. Quis vel eros donec ac.</p>
      
      </div>
      <img className="cta-img" src={office} height="400" width="350" alt="" />
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
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
        </div>
    )
}

export default Cta
