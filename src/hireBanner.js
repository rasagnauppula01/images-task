import React from 'react';
import './hireBanner.css';
import banner from "./assets/Group 40.png"

const HireBanner = () => {
    return (
        <div className="containerH">
        <div className="contentH">
          <h1>Hire the best developers and <br></br> designers around!</h1>
        </div>
        <div className="button-containerH">
          <button className="hire-buttonH">
            Hire Top Developers
          </button>
          <div className="button-linesH">
            <img src={banner}></img>
          </div>
        </div>
      </div>
    );
}

export default HireBanner;
