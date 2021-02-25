import React from "react";

export default function RSVP({ id }) {

  return (
    <div className="container">
      <div id={id}>
        <div className="row card">
          <form>
            <h3>RSVP</h3>
            <fieldset className="card-content">
                <input name="name" placeholder="Name" />
              <br />
                <input name="address" placeholder="Address" />
              <br />
                <input name="phone" placeholder="Phone Number" />
              <br />
                <input name="email" placeholder="Email" />
              <br />
                <button type="submit">Submit</button>
              <br />
              <br />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}