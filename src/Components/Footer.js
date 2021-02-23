import React from "react";

import happyEverAfter from '../Assets/happyEverAfter.jpeg';

export default function Footer({ id }) {
  return (
      <div className="footer" id={id}>
        <img src={happyEverAfter} alt="And they lived happily ever after." />
      </div>
  );
}