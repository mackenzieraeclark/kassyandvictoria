import React from "react";

import one from "../Assets/1.jpeg";
import two from "../Assets/2.jpeg";
import three from "../Assets/3.jpeg";
import four from "../Assets/4.jpeg";
import five from "../Assets/5.jpeg";

export default function Gallery({ id }) {
  return (
    <div className="container">
      <div id={id}>
        <div className="row">
            <div className="gallery">
                <div className="gallery-item">
                    <img src={one} alt="one" />
                </div>
                <div>
                    <img src={two} alt="happily" />
                </div>
                <div>
                    <img src={three} alt="ever" />
                </div>
                <div>
                    <img src={four} alt="after," />
                </div>
                <div>
                    <img src={five} alt="together" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}