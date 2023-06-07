import React, { useEffect, useState } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../container';
import { Navbar } from '../components';
import { auth,db } from '../firebase';
import '../App.css';

function MainComponent() {

  
  return (
    <div>
    
    <Header />
    {/* <AboutUs /> */}
    {/* <SpecialMenu /> */}
    <Chef />
    <Intro />
    <Laurels />
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    </div>
  )
}

export default MainComponent
