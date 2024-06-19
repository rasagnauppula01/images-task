// import logo from './assets/images/Vector.svg';
// import logo1 from "./assets/images/img_group_101 (1).png"
 import React from 'react';
import Header from './header';
import HeroSection from './hero';
import Services from './services';
import CompaniesTrust from './companiesTrust';
import PeopleWork from './peoplework';
import CaseStudies from './caseStudies';

function App() {
  return (
    <div className="App">

      <Header/>
      <HeroSection/>
      <Services/>
      <CompaniesTrust/>
      <PeopleWork/>
      <CaseStudies/>
    </div>
  );
}

export default App;
