import React from "react";

export default function Registry({ id }) {
  return (
    <div className="container">
      <div id={id}>
       <div className="row card">
         <div className="card-content">
              <span style={{fontFamily: 'cursive', fontSize: 'x-large'}}>Wishing Well</span>
              <h4>More than just kisses so far we've shared <br/>
              Our home has been made with love and care,<br/>
              Most things we need we've already got,<br/>
              And in our home we can't fit a lot!<br/>
              A donation to our wishing well would be great,<br/>
              But only if you wish to participate.</h4>
              <button type="submit">
                <a href='https://registry.theknot.com/kassandra-perez-victoria--sachs-november-2021-fl/43496472' >Donate</a>
                </button>
              <br/><br/>
         </div>
       </div>
      </div>
    </div>
  );
}