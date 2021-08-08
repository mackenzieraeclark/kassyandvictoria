import React from "react";

export default function RSVP({ id }) {
  return (
    <div className="container">
      <div id={id}>
        <div className="row">
          <div className="column">
            <h3>RSVP</h3>
            <iframe src="https://kassyandvictoria.rsvpify.com/" title=""></iframe>
            <p id="rsvpLink">You can RSVP at: <a href="https://kassyandvictoria.rsvpify.com/">https://kassyandvictoria.rsvpify.com/</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}