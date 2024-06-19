import React from 'react';
import './companiesTrust.css';
import AboutVideo from "./assets/About-us-Video.png"
import click from "./assets/Link-click.png"

const CompaniesTrust = () => {
  return (
    <section className="companies-trust">
     
      <div className="text-section">
      <div className='line'></div>
        <h2>Leading companies trust us<br></br><span> to develop software</span></h2>
        <p>We add development capacity to tech teams. Our value isn’t <br></br> limited to building teams but is equally distributed across the <br></br>project lifecycle.We are a custom software development <br></br>company that guarantees the successful delivery of your project.</p>
        <br></br><img src={click} alt='click'></img>
      </div>
      <div className="video-section">
        <img src={AboutVideo} alt="Team discussion" />
      </div>
    </section>
  );
};

export default CompaniesTrust;