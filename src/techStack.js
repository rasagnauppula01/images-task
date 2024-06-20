import React from 'react';
import './techStack.css';
import nodeJs from './assets/nodeJS.png';
import php from './assets/PHP.png';
import mysql from './assets/MYSQL.png';
import java from './assets/Java.png';
import dotNet from './assets/NETCore.png';
import python from './assets/Python.png';
import rails from './assets/RubyOnRails.png';
import golang from './assets/Go.png';
import mongodb from './assets/MONOGOdb.png';

function TechStacks() {
  return (
    <div className="App">
      <div>
        <hr></hr>
      </div>
      <div className="tech-stack">
      <div className="line6"></div>
        <h1>Our <br></br><span>Tech Stack</span></h1>
        <div className="categories">
          <div className="category">Backend</div>
          <div className="category">Frontend</div>
          <div className="category">Databases</div>
          <div className="category">CMS</div>
          <div className="category">CloudTesting</div>
          <div className="category">DevOps</div>
        </div>
      </div>
      <div>
      <div className="tech-icons">
        <img src={nodeJs} alt="Node.js" />
        <img src={php} alt="PHP" />
        <img src={mysql} alt="MySQL" />
        <img src={java} alt="Java" />
        <img src={dotNet} alt=".NET Core" />

      </div>
      <div className='tech-icon-inner'>
      <img src={python} alt="Python" />
        <img src={rails} alt="Ruby on Rails" />
        <img src={golang} alt="Golang" />
        <img src={mongodb} alt="MongoDB" style={{width:"190px", height:"54px", marginTop:'1rem'}}/>
      </div>
      </div>

      <div>
        <hr></hr>
      </div>
    </div>
  );
}

export default TechStacks;
