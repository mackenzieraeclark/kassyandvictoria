import React from "react";

import helloHero from '../Assets/hero.jpeg';
var divStyle = {
  color: 'white',
  margin: "0",
  width: "100vw",
  height: "100vh",
  backgroundImage: 'url(' + helloHero + ')',
  backgroundSize: 'cover'
};

export default function Hero({ id }) {
  return (
    <div className="container">
      <div id={id}>
      <div style={divStyle}>
        <div style={{ 
          textAlign: 'center', 
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '5em' }}>
          <h3>Join us this November 12th in celebrating...</h3>
          <br/><br/>
          <h1>Kassy and Victoria</h1>
        </div>
      </div>
      </div>
    </div>
  );
}