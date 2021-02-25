import React from "react";

export default function RSVP({ id }) {

  const handleSubmit = event => {
    event.preventDefault();
    alert("Thank you, we can't wait to celebrate with you!");
  }


  return (
    <div className="container">
      <div id={id}>
        <div className="row card">
          <form onSubmit={handleSubmit}
            method="POST" action="https://script.google.com/macros/s/AKfycbzNoBQDZBGrYO2RFSi3B4co7HstzQFf75V-qt4vkv3vb1KyfblfVGgGmw/exec"
          >
            <fieldset className="card-content">
                <input name="name" placeholder="Name" />
              <br />
                <input name="address" placeholder="Address" />
              <br />
                <input name="phone" placeholder="Phone Number" />
              <br />
                <input name="email" placeholder="Email" />
            </fieldset>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}