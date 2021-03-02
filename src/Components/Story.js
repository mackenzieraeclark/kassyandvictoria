import React from "react";

import ourStory1 from '../Assets/ourStory1.jpeg';
import ourStory2 from '../Assets/ourStory2.jpeg';


export default function Story({ id }) {
  return (
    <div className="container">
      <div id={id}>
        <div className="row">
         <div className="column">
          <br /><br />
          <h4>For those who don’t know, Kassy and Victoria met back in 2015 in a Criminology Fraternity. Victoria noticed a girl trying to dribble a ball with her knees and was immediately consumed by the idea that that girl may play soccer. (Shocker, am I right?) That girl, Kassy, has two left feet and couldn’t play soccer if she tried. After that day, Kassy would go to events and would run into Victoria. The two slowly developed a friendship. Victoria was just <em>pretending</em> to not be interested but Kassy was being patient. Quickly, the two grew closer and closer. Victoria being the stubborn person that she is (again, shocker) kept playing hard to get. </h4>
          <br /><br />
          <img src={ourStory2} alt="we said yes!" style={{width: '60%'}} />
          <br /><br />
         </div>
        </div>
        <div className="row">
          <div className="column">
            <h4>Eventually, that all changed on Cinco de Mayo in 2016. Victoria <em>finally</em> admitted that she had feelings for Kassy in a drunken ramble. A beach day later and some devising from a meddling best friend, the two finally expressed their feelings for each other.</h4>
            <br /><br />
            <img src={ourStory1} alt="Two dogs later..." style={{width: '60%'}} />
            <br /><br />
            <h4>Two houses, two dogs, a couple of job promotions and a few years later, here they are. LETS DO THIS THING.</h4>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Story({ id }) {
//   return (
//     <div className="container">
//       <div id={id}>
//         <div className="row">
//           <div className="column">
//             <div>
//               <img src={ourStory1} alt="Two dogs later..." style={{width: '60%'}} />
//               <br />
//               <img src={ourStory2} alt="we said yes!" style={{width: '60%'}} />
//             </div>
//             <div>
//               <img />
//             </div>
//           </div>
//           <div className="column" style={{textAlign: 'left'}}>
//             <h4>For those who don’t know, Kassy and Victoria met back in 2015 at a Criminology Fraternity. Victoria noticed a girl trying to dribble a ball with her knees and was immediately consumed by the idea that that girl may play soccer. (Shocker, am i right?) That girl, Kassy, has two left feet and couldn’t play soccer if she tried. After that day, Kassy would go to events and would run into Victoria. The two slowly developed a friendship. Victoria was just *pretending* to not be interested but Kassy was being patient. Quickly, the two grew closer and closer. Victoria being the stubborn person that she is (again, shocker) kept playing hard to get. </h4>
//             <h4>Eventually, that all changed on Cinco de Mayo in 2016. Victoria FINALLY admitted that she had feelings for Kassy in a drunken ramble. A beach day later and some devising from a meddling best friend, the two finally expressed their feelings for each other.</h4>
//             <h4>Two houses, two dogs, a couple of job promotions and a few years later, here they are. LETS DO THIS THING.</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }