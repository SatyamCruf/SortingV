import React from 'react';
import './Main.css';
import LeftBar from './LeftBar';
import Visuals from './Visuals';

function Main() {
  return (
    <div className="main">
       <LeftBar />
       <Visuals />
   </div>
  )
}

export default Main;