import React from "react";
import "./welcome.css";
import imgpc from "../assets/propic.webp"
function welcome() {
  return (
    <div className="welcome-container">
      <div className="two-side">
        <div className="hero-sec">
        <div className="hero-sec-content">
          <h1>Become a</h1>
          <h1>better Frontend</h1>
          <h1>developer</h1>
          </div>
          <div className="hero-sec-p">
          <p>Take your frontend skills to the next</p>
          <p>level by recreating <span>real websites</span>
          <p>from<span> real companies.</span></p> </p>
          <div className="hero-sec-p2" >
              <p>The perfect type of practice for developers of all skill levels. Are you up for the challenge?</p>
          </div>
          </div>
          <div className="hero-btn">
            <button className="hero-btn-1">View Project</button>
            <button className="hero-btn-2">Learn More</button>
          </div>
          
      </div>
      <div className="hero-pic">
        <img src={imgpc} alt="" />
      </div>
      
      </div>
      
      
           <div className="welcome-content">
            <div className="quotes">
                <h1>Frontend Practice provides you with the inspiration and resources to create beautiful websites.</h1>
            <div className="sub-quotes">
                <h2>Here are some ways you can benefit from <br />using our platform:</h2>
            </div>    
            </div>
           </div>
    </div>
  );
}

export default welcome;
