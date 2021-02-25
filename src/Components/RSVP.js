import React from "react";

export default function RSVP({ id }) {

  const handleSubmit = event => {
    event.preventDefault();
    alert("Thank you, we can't wait to celebrate with you!")
  }


  return (
    <div className="container">
      <div id={id}>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <input name="name" placeholder="Name" />
              </label>
              <br />
              <label>
                <input name="address" placeholder="Address" />
              </label>
              <br />
              <label>
                <input name="phone" placeholder="Phone Number" />
              </label>
              <br />
              <label>
                <input name="email" placeholder="Email" />
              </label>
            </fieldset>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}