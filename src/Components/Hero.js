import React from "react";

import desktopImage from '../Assets/desktopHero.jpeg';
import mobileImage from '../Assets/mobileHero.jpeg';

const Hero = () => {
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
      <div className="Hero" style={{backgroundImage: `url(${imageUrl})` }}>
          <div className="Hero-content">
          <h3>Join us this November 12th in celebrating...</h3>
          <br/><br/>
          <h1>Kassy and Victoria</h1>
          </div>
      </div>
  );
};

export default Hero;











// var divStyle = {
//   color: 'white',
//   margin: "0",
//   width: "100vw",
//   height: "100vh",
//   backgroundImage: 'url(' + helloHero + ')',
//   backgroundSize: 'cover'
// };

// export default function Hero({ id }) {
//   return (
//     <div className="container">
//       <div id={id}>
//       <div style={divStyle}>
//         <div style={{ 
//           textAlign: 'center', 
//           alignItems: 'center',
//           justifyContent: 'center',
//           paddingTop: '5em' }}>
//           <h3>Join us this November 12th in celebrating...</h3>
//           <br/><br/>
//           <h1>Kassy and Victoria</h1>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }