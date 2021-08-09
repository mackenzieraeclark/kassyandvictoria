import React from "react";

import shuttle from "../Assets/shuttle.png";
import ceremony from "../Assets/ceremony.png";
import cocktail from "../Assets/cocktail.png";
import dinner from "../Assets/dinner.png";
import dancing from "../Assets/dancing.png";
import sendoff from "../Assets/sendoff.png";

export default function Timeline({ id }) {
  return (
    <div className="container">
      <div id={id}>
        <div className="row">
          <div className="column">
          <ul class="timeline">

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Shuttle Service</span>
      <span class="time-wrapper"><span class="time">4:00 PM</span></span>
    </div>
    <div class="desc"><img style={{maxWidth: '40%'}} src={shuttle} alt="shuttle" /></div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag">Wedding Ceremony</span>
      <span class="time-wrapper"><span class="time">4:30 PM</span></span>
    </div>
    <div style={{paddingTop: '2em'}} class="desc"><img style={{maxWidth: '40%'}} src={ceremony} alt="ceremony" /></div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Cocktail Hour</span>
      <span class="time-wrapper"><span class="time">5:00 PM</span></span>
    </div>
    <div class="desc"><img style={{maxWidth: '40%'}} src={cocktail} alt="cocktail" /></div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag">Dinner and Toasts</span>
      <span class="time-wrapper"><span class="time">6:00 PM</span></span>
    </div>
    <div style={{paddingTop: '2em'}} class="desc"><img style={{maxWidth: '40%'}} src={dinner} alt="dinner" /></div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Dancing</span>
      <span class="time-wrapper"><span class="time">7:00 PM</span></span>
    </div>
    <div class="desc"><img style={{maxWidth: '40%'}} src={dancing} alt="dancing" /></div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag">Send Off</span>
      <span class="time-wrapper"><span class="time">9:00 PM</span></span>
    </div>
    <div style={{paddingTop: '2em'}} class="desc"><img style={{maxWidth: '40%'}} src={sendoff} alt="sendoff" /></div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Shuttle Services</span>
      <span class="time-wrapper"><span class="time">9:15 PM</span></span>
    </div>
    <div class="desc"><img style={{maxWidth: '40%'}} src={shuttle} alt="shuttle" /></div>
  </div>
</li>

</ul>
          </div>
        </div>
      </div>
    </div>
  );
}