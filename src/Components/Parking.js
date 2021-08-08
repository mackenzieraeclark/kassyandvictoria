import React from "react";
import map from "../Assets/map.png";

export default function Parking({ id }) {
  return (
    <div className="container">
      <div id={id}>
        <div className="row">
          <div className="column">
            <h3>Parking</h3>
            <p>Please park at the Miccosukee Greenway Thornton Road Trailhead. The parking
lot will open at 3:45 pm. There will be a Mercedes Passenger Van shuttling guests
to and from the Pachs Farm. The shuttle will run from <strong>4:00 pm to 4:30 pm</strong> and
<strong> 8:45 pm to 9:45 pm</strong>. We kindly request that guests use the shuttle service
provided as Miccosukee Road is a very busy, highly trafficked road. If you plan on
using a ride share service, you have them drop you off at the Pachs Farm.</p>
            <p>Sadly, there is not a physical address for the parking lot/trail head. If you use
Google maps, and type in “Miccosukee Greenway Thornton Road Trailhead” it will
bring you directly to the lot. Apple maps does not recognize the trailhead. Please

use the maps below for reference.</p>
            <p>The Shuttle service will begin transporting guests at 4:00 pm. Please plan
accordingly. Directional signs will be posted along Miccosukee and Thornton
Road. If you get lost, please call or text Andrea Tinoco at <strong>954-415-7318</strong>.</p>
            <div style={{paddingTop: '2em'}}><img style={{maxWidth: '90%'}} src={map} alt="map" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}