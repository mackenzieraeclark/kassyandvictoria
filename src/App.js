import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import RSVP from "./Components/RSVP";
import Story from "./Components/Story";
// import DayOf from "./Components/DayOf";
import Gallery from "./Components/Gallery";
import Registry from "./Components/Registry";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero
          id="section1"
        />
        {/* <RSVP
          id="section2"
        /> */}
        <Story
          id="section3"
        />
        <Gallery />
        {/* <DayOf
          id="section4"
        /> */}
        <Registry
          id="section5"
        />
        <Footer />
      </div>
    );
  }
}

export default App;