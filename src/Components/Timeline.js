import React from "react";
import { FaShuttleVan } from "react-icons/fa";

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
    <div class="desc"></div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag">Wedding Ceremony</span>
      <span class="time-wrapper"><span class="time">4:30 PM</span></span>
    </div>
    <div class="desc"></div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Cocktail Hour</span>
      <span class="time-wrapper"><span class="time">5:00 PM</span></span>
    </div>
    <div class="desc"></div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag">Dinner and Toasts</span>
      <span class="time-wrapper"><span class="time">6:00 PM</span></span>
    </div>
    <div class="desc"></div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Dancing</span>
      <span class="time-wrapper"><span class="time">7:00 PM</span></span>
    </div>
    <div class="desc"></div>
  </div>
</li>

<li>
  <div class="direction-l">
    <div class="flag-wrapper">
      <span class="flag">Send Off</span>
      <span class="time-wrapper"><span class="time">9:00 PM</span></span>
    </div>
    <div class="desc"></div>
  </div>
</li>

<li>
  <div class="direction-r">
    <div class="flag-wrapper">
      <span class="flag">Shuttle Services</span>
      <span class="time-wrapper"><span class="time">9:00 PM</span></span>
    </div>
    <div class="desc"><FaShuttleVan/></div>
  </div>
</li>

</ul>
          </div>
        </div>
      </div>
    </div>
  );
}